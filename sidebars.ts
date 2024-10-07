import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  guides: [
    {
      type: 'category',
      label: 'Linux',
      link: {
        type: 'generated-index',
        slug: '/category/linux',
      },
      items: [
        'guides/linux/install-debian-core', 
        'guides/linux/install-docker-debian', 
        'guides/linux/install-portainer-host-agent',
        'guides/linux/install-nvidia-drivers-ubuntu',
        'guides/linux/nvidia-docker-toolkit',
        'guides/linux/use-grafana-to-monitor-system'
      ]
    },
    {
      type: 'category',
      label: 'COMET (CM3588)',
      link: {
        type: 'generated-index',
        slug: '/category/comet',
      },
      items: [
        'guides/comet/build-autonomys-image', 
        'install-os-on-comet'
      ]
    },
    {
      type: 'category',
      label: 'Windows',
      link: {
        type: 'generated-index',
        slug: '/category/windows',
      },
      items: []
    },
    {
      type: 'category',
      label: 'Spacemesh',
      link: {
        type: 'generated-index',
        slug: '/category/spacemesh',
      },
      items: []
    },
    {
      type: 'category',
      label: 'Autonomys',
      link: {
        type: 'generated-index',
        slug: '/category/autonomys',
      },
      items: [
        'guides/autonomys/docker-node-autonomys', 
        'guides/autonomys/docker-cluster-autonomys', 
        'guides/autonomys/prep-your-drives-for-autonomys',
        'guides/autonomys/advanced-clusters'
      ]
    }
  ]
};

export default sidebars;
