/**
 * @description vite的插件配置文件
 */

import { Plugin } from "vite";
import configEslint from "./eslint";
import configStylelint from "./stylelint";

export default function createVitePlugins(command: string, mode: string) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    configEslint(),
    configStylelint()
  ];

  return vitePlugins;
}