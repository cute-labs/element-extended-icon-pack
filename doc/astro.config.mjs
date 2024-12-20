// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Element UI 扩展图标库',
        social: {
            github: 'https://github.com/richhost/element-extended-icon-pack',
        },
        sidebar: [
            {
                label: "Icons",
                link: "/icons"
            },
            {
                label: "包",
                autogenerate: {
                    directory: "packages"
                }
            }
        ],
    }), svelte()],
});