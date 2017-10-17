import test from 'tape'
import { shallow } from 'vue-test-utils'
import Gallery from '../src/components/gallery/page.vue'

test('Gallery.vue', t => {
	t.plan(3); // 3 test only
  const wrapper = shallow(Gallery);
  const msgOne = 'should have a root element with a "container" class';
  const msgTwo = 'should have 18 cells (1 for each photo)';
  const msgThree = 'should have 5 rows of photos';
  t.equal(wrapper.findAll('.container').length, 1, msgOne);
  t.equal(wrapper.findAll('.col').length, 18, msgTwo);
  t.equal(wrapper.findAll('.row').length, 5, msgThree);
});
