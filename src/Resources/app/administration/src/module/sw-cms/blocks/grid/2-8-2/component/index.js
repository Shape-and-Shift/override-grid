import template from './sas-cms-grid-block-2-8-2-column.html.twig';

Shopware.Component.override('sw-cms-block-grid-2-8-2', {
    template,

    inject: ['cmsService'],

    computed: {
        cmsBlocks() {
            return this.cmsService.getCmsBlockRegistry();
        },
    },

    created() {
        this.overrideSlotsBlock()
    },

    methods: {
        getBlockTitle(blockName) {
            if (typeof this.cmsBlocks[blockName] !== 'undefined') {
                return this.cmsBlocks[blockName];
            }

            return null;
        },

        overrideSlotsBlock() {
            const block = this.getBlockTitle('grid-2-8-2');
            if (block) {
                block.slots = {
                    'left': 'text',
                    'middle': 'youtube-video',
                    'right': 'vimeo-video'
                };
            }
        }
    }
});
