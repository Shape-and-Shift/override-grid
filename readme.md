To override the slots of grid plugin, first of all we have to understand about the structure of the grid plugin

We pushed all the grid to this folder `src/Resources/app/administration/src/module/sw-cms/blocks/grid`

In here you can see the name of the grid you want to override

For example, Now I will try to change the slot of `2-8-2`, what I should do now is do an override these files

```
- 2-8-2/index.js                                            // The slots in this file
- 2-8-2/component/sas-cms-grid-block-2-8-2-column.html.twig // The html content in this file if your needs want
```

---------------

So let's start with our sample plugin

My desired result is change the Key name and the elements of the slots to
```
slots = {
    'left': 'text',
    'middle': 'youtube-video',
    'right': 'vimeo-video'
};
```
If you don't know where I got the name of elements you can go to this part `platform/src/Administration/Resources/app/administration/src/module/sw-cms/blocks`
and get the name of the sub-categories of the folders

The first thing I will do is create the files as same as the directory with the grid I want to modify

```
src/Resources/app/administration/src/module/sw-cms/blocks/grid/2-8-2/component/index.js
src/Resources/app/administration/src/module/sw-cms/blocks/grid/2-8-2/component/sas-cms-grid-block-2-8-2-column.html.twig
src/Resources/app/administration/src/main.js
```

---------------

Now I will explain what you need to consider in each of these files

You can copy the content in these files and change its contents as desired

**File: `src/Resources/app/administration/src/module/sw-cms/blocks/grid/2-8-2/component/index.js`**
```
...

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

...
```

In this file I will get the block title name `grid-2-8-2` to get the slots variable and override it to what I'm needs

If you don't know how to get the name, so you can debug with this console in you code `console.log('this.cmsBlocks');` or you go to `2-8-2/index.js` file in grid plugin and copy the value in the name parameter


**File: `src/Resources/app/administration/src/module/sw-cms/blocks/grid/2-8-2/component/sas-cms-grid-block-2-8-2-column.html.twig`**

```
...

<slot name="left"></slot>
<slot name="middle"></slot>
<slot name="right"></slot>

...
```

Please keep in mind that, If you change the slot key name, add more or delete. you have to override the slot tags like above

**File: `src/Resources/app/administration/src/main.js`**

```
import './module/sw-cms/blocks/grid/2-8-2/component';
```

To import the grid component of your custom, so that Shopware can execute your override

