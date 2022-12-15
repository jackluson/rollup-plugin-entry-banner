import bannerEntry, { createBanner, BannerEntryOptions } from '../index';
import { rollup } from 'rollup';

describe('rollup-plugin-entry-banner', () => {
  it('should match snapshot', async () => {
    const bundleWithPlugin = await rollup({
      input: 'src/__tests__/fixtures/index.js',
      output: {
        exports: 'default',
      },
      plugins: [bannerEntry()],
    });
    const { output: outputWithPlugin } = await bundleWithPlugin.generate({ format: 'cjs' });
    expect(outputWithPlugin[0].code).toMatchSnapshot();
  });

  it('default config', async () => {
    const bundleWithPlugin = await rollup({
      input: 'src/__tests__/fixtures/index.js',
      output: {
        exports: 'default',
      },
      plugins: [bannerEntry()],
    });
    const bundle = await rollup({
      input: 'src/__tests__/fixtures/index.js',
      output: {
        exports: 'default',
      },
    });
    const { output: outputWithPlugin } = await bundleWithPlugin.generate({ format: 'cjs' });
    const { output } = await bundle.generate({ format: 'cjs' });
    expect(outputWithPlugin[0].code).toBe(createBanner() + output[0].code);
  });

  it('set preset config', async () => {
    const options = {
      preset: false,
    };
    const bundleWithPlugin = await rollup({
      input: 'src/__tests__/fixtures/index.js',
      output: {
        exports: 'default',
      },
      plugins: [bannerEntry(options)],
    });
    const bundle = await rollup({
      input: 'src/__tests__/fixtures/index.js',
      output: {
        exports: 'default',
      },
    });
    const { output: outputWithPlugin } = await bundleWithPlugin.generate({ format: 'cjs' });
    const { output } = await bundle.generate({ format: 'cjs' });
    expect(outputWithPlugin[0].code).toBe(createBanner(options) + output[0].code);
  });

  it('set renderBanner config', async () => {
    const options1 = {
      renderBanner: (code: string) => code + '/**/',
    };
    async function testRenderBanner(options: BannerEntryOptions) {
      const bundleWithPlugin = await rollup({
        input: 'src/__tests__/fixtures/index.js',
        output: {
          exports: 'default',
        },
        plugins: [bannerEntry(options)],
      });
      const bundle = await rollup({
        input: 'src/__tests__/fixtures/index.js',
        output: {
          exports: 'default',
        },
      });
      const { output: outputWithPlugin } = await bundleWithPlugin.generate({ format: 'cjs' });
      const { output } = await bundle.generate({ format: 'cjs' });
      expect(outputWithPlugin[0].code).toBe(createBanner(options) + output[0].code);
    }
    testRenderBanner(options1);
  });

  it('set packageJsonDir config', async () => {
    const options = {
      packageJsonDir: process.cwd() + '/src/__tests__/fixtures',
    };
    const bundleWithPlugin = await rollup({
      input: 'src/__tests__/fixtures/index.js',
      output: {
        exports: 'default',
      },
      plugins: [bannerEntry(options)],
    });
    const bundle = await rollup({
      input: 'src/__tests__/fixtures/index.js',
      output: {
        exports: 'default',
      },
    });
    const { output: outputWithPlugin } = await bundleWithPlugin.generate({ format: 'cjs' });
    const { output } = await bundle.generate({ format: 'cjs' });
    expect(outputWithPlugin[0].code).toBe(createBanner(options) + output[0].code);
  });
});
