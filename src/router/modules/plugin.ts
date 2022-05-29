const plugin: AuthRoute.Route = {
  name: 'plugin',
  path: '/plugin',
  component: 'basic',
  children: [
    {
      name: 'plugin_map',
      path: '/plugin/map',
      component: 'self',
      meta: {
        title: '地图',

        icon: 'mdi:map'
      }
    },
    {
      name: 'plugin_video',
      path: '/plugin/video',
      component: 'self',
      meta: {
        title: '视频',

        icon: 'mdi:video'
      }
    },
    {
      name: 'plugin_editor',
      path: '/plugin/editor',
      component: 'multi',
      children: [
        {
          name: 'plugin_editor_quill',
          path: '/plugin/editor/quill',
          component: 'self',
          meta: {
            title: '富文本编辑器',

            icon: 'mdi:file-document-edit-outline'
          }
        },
        {
          name: 'plugin_editor_markdown',
          path: '/plugin/editor/markdown',
          component: 'self',
          meta: {
            title: 'markdown编辑器',

            icon: 'ri:markdown-line'
          }
        }
      ],
      meta: {
        title: '编辑器',
        icon: 'icon-park-outline:editor'
      }
    },
    {
      name: 'plugin_swiper',
      path: '/plugin/swiper',
      component: 'self',
      meta: {
        title: 'Swiper插件',

        icon: 'simple-icons:swiper'
      }
    },
    {
      name: 'plugin_copy',
      path: '/plugin/copy',
      component: 'self',
      meta: {
        title: '剪贴板',

        icon: 'mdi:clipboard-outline'
      }
    },
    {
      name: 'plugin_icon',
      path: '/plugin/icon',
      component: 'self',
      meta: {
        title: '图标',

        icon: 'ic:baseline-insert-emoticon'
      }
    },
    {
      name: 'plugin_print',
      path: '/plugin/print',
      component: 'self',
      meta: {
        title: '打印',

        icon: 'ic:baseline-local-printshop'
      }
    }
  ],
  meta: {
    title: '插件示例',
    icon: 'clarity:plugin-line',
    order: 4
  }
};

export default plugin;
