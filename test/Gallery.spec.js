'use strict';

import { expect } from 'chai';
import { mount } from 'avoriaz';
import Gallery from '../src/components/gallery/page.vue';

describe('Gallery.vue', () => {
    it ('has a root element with class container', () => {
        const wrapper = mount(Gallery);
        expect(wrapper.is('.container')).to.equal(true);
    });

    it ('should have 5 rows of photos', () => {
        const wrapper = mount(Gallery);
        expect(wrapper.find('.row').length).to.equal(5);
    });

    it ('should have 18 cells (1 for each photo)', () => {
        const wrapper = mount(Gallery);
        expect(wrapper.find('.col').length).to.equal(18);
    });
});
