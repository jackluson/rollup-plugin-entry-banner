/*
 * Desc: rollup-plugin-entry-banner
 * File: /src/index.ts
 * File Created: Saturday, 3rd April 2021 12:31:28 am
 */
import { Plugin } from 'rollup';

type ConsoleItemParam = {
  label: string;
  labelColor?: string;
  labelBgColor?: string;
  labelPadding?: string;
  labelBorderRadius?: string;
  value: string;
  valueColor?: string;
  valueBgColor?: string;
  valuePadding?: string;
  valueBorderRadius?: string;
};

const cwd = process.cwd();

export type BannerEntryOptions = {
  packageJsonDir?: string;
  preset?: boolean;
  renderBanner?: (bannerStr: string) => string;
};

const createBanner = (options?: BannerEntryOptions) => {
  const { packageJsonDir = cwd, renderBanner, preset = true } = options || {};
  let bannerStr = '';
  if (preset) {
    const packageJsonPath = packageJsonDir + '/package.json';
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const packageJson = require(packageJsonPath);
    const datetime = new Date();
    const buildTime = datetime.toLocaleDateString() + ' ' + datetime.toLocaleTimeString();
    // const commitId = child_process.execSync('git rev-parse --short HEAD').toString().trim();
    const consoleList: ConsoleItemParam[] = [
      {
        label: 'Name',
        labelBgColor: '#606060',
        value: packageJson.name,
        valueBgColor: '#42c02e',
      },
      {
        label: 'Version',
        value: packageJson.version,
      },
      {
        label: 'Node Version',
        value: process.version,
      },
      {
        label: 'Built at',
        value: buildTime,
      },
      // {
      //   label: 'CommitId',
      //   valueBgColor: '#fff',
      //   value: 'https://gitlab.realibox.cn/designhub/iview-web/-/commit/' + commitId,
      // },
    ];
    const formatBannerParams = (params: ConsoleItemParam[]): ConsoleItemParam[] =>
      params.map((item) => ({
        ...item,
        labelColor: item.labelColor || '#fff',
        labelBgColor: item.labelBgColor || '#35495e',
        labelPadding: item.labelPadding || '1px',
        labelBorderRadius: item.labelBorderRadius || '3px 0 0 3px',
        valueColor: item.valueColor || '#fff',
        valueBgColor: item.valueBgColor || '#41b883',
        valuePadding: item.valuePadding || '#1px',
        valueBorderRadius: item.valueBorderRadius || '0 3px 3px 0',
      }));
    const banner = formatBannerParams(consoleList).map((item) => {
      return `console.info("%c ${item.label}: %c ${item.value} ", "background:${item.labelBgColor}; padding: ${item.labelPadding}; border-radius: ${item.labelBorderRadius}; color: ${item.labelColor}", "background:${item.valueBgColor}; padding: ${item.valuePadding}; border-radius: ${item.valueBorderRadius}; color: ${item.valueColor}")`;
    });
    bannerStr = ';' + banner.join(';') + ';';
  }
  if (renderBanner) {
    bannerStr = renderBanner(bannerStr) || bannerStr;
  }
  return bannerStr;
};

export default function bannerEntry(options?: BannerEntryOptions): Plugin {
  return {
    name: 'banner-entry',
    renderChunk(code, chunk) {
      if (chunk.isEntry) {
        return createBanner(options) + code;
      }
    },
  };
}

export { bannerEntry, createBanner };
