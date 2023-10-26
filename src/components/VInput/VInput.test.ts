import { mount, VueWrapper } from '@vue/test-utils';
import { VInput, type VInputProps } from '.';
import {fa, faker} from '@faker-js/faker';
import {expect} from "vitest";


const defaultProps = {
  label: 'This is a label',
  error: false,
  errorMessage:'This is a error',
  modelValue: '',
};
describe('VInput', () => {
  let wrapper: VueWrapper<InstanceType<typeof VInput>>;

  beforeEach(() => {
    wrapper = mount(VInput, { shallow: true, props: defaultProps });
  });
  const getInputWrapper = () => {
    return wrapper.find('[data-testid="input"]');
  };
  const getErrorWrapper = () => {
    return wrapper.find('[data-testid="error"]');
  };
  test('has correct error if error is defined', () => {
    wrapper=mount(VInput,{
      shallow:true,
      props:{...defaultProps,error:true}
    })
    expect(getErrorWrapper().text()).toBe(defaultProps.errorMessage);
  });
  test('has no error if no error is defined', () => {
    wrapper = mount(VInput, {
      shallow: true,
      props: { ...defaultProps, error: undefined },
    });
    expect(getErrorWrapper().exists()).toBe(false);
  });
  test('label value',()=>{
    /*update:modelValue*/
    const label = faker.internet.email();

    wrapper = mount(VInput, {
      shallow: true,
      props: { ...defaultProps,modelValue:"test",label:label },
    });
    expect(wrapper.props('label')).toBe(label);
  })

  test('emit event',async()=>{
    /*update:modelValue*/
    const string = faker.internet.email();
    const input = getInputWrapper();
    (input.element as HTMLInputElement).value=string;
    await input.trigger('input');
    expect(wrapper.emitted('update:modelValue')).toStrictEqual([[string]]);
  })
});
