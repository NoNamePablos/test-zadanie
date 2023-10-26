import { mount, VueWrapper } from '@vue/test-utils';
import { VPriceItem, type VPriceItemProps } from '.';
import { faker } from '@faker-js/faker';

const defaultProps: VPriceItemProps = {};

describe('VPriceItem', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VPriceItem, { shallow: true, props: defaultProps });
  });

  test.todo('Example', () => {});
});
