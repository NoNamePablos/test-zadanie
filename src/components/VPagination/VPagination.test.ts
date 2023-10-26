import { mount, VueWrapper } from '@vue/test-utils';
import { VPagination, type VPaginationProps } from '.';
import { faker } from '@faker-js/faker';
import {VInput} from "@/components/VInput";
import {expect} from "vitest";

const defaultProps: VPaginationProps = {
  pageCount: 5,
  currentPage:1,
};

describe('VPagination', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(VPagination, { shallow: true, props: defaultProps });
  });
  test('render correctly',()=>{
    expect(wrapper.exists()).toBe(true);
  })
  const getButtonsWrapper = () => {
    return wrapper.findAll('[data-testid="buttons"]');
  };
});