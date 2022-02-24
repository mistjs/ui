import { ExtractPropTypes, PropType, Slot, VNode } from 'vue';
import { SizeType } from '../config-provider';
import { LiteralUnion } from '../_utils/type';
import { PropsVNode } from '../_utils/tools/props-util';

export interface ShowCountType {
  formatter: (args: { count: number; maxLength?: number }) => VNode;
}

export type InputType = LiteralUnion<
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week',
  string
>;

export const inputProps = {
  addonAfter: {
    type: [Object, Function] as PropType<PropsVNode>,
    default: undefined,
  },
  addonBefore: {
    type: [Object, Function] as PropType<PropsVNode>,
    default: undefined,
  },
  allowClear: {
    type: Boolean as PropType<boolean>,
    default: undefined,
  },
  bordered: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  defaultValue: {
    type: String as PropType<string>,
    default: undefined,
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  id: {
    type: String as PropType<string>,
    default: undefined,
  },
  maxLength: {
    type: Number as PropType<number>,
    default: undefined,
  },
  showCount: {
    type: [Boolean, Function] as PropType<boolean | ShowCountType>,
    default: undefined,
  },
  prefix: {
    type: [Object, Function] as PropType<PropsVNode>,
    default: undefined,
  },
  suffix: {
    type: [Object, Function] as PropType<PropsVNode>,
    default: undefined,
  },
  size: {
    type: String as PropType<SizeType>,
    default: undefined,
  },
  type: {
    type: String as PropType<InputType>,
    default: 'text',
  },
  value: {
    type: String as PropType<string>,
    default: undefined,
  },
  htmlSize: {
    type: Number as PropType<number>,
    default: undefined,
  },
  onPressEnter: {
    type: Function as PropType<(e) => void>,
    default: undefined,
  },
};

export type InputProps = ExtractPropTypes<typeof inputProps>;

export const inputEmits = {
  input: (e: Event) => e,
  change: (e: Event) => e,
  focus: (e: FocusEvent) => e,
  blur: (e: FocusEvent) => e,
  keydown: (e: KeyboardEvent) => e,
  pressEnter: (e: KeyboardEvent) => e,
  clear: () => true,
  'update:value': (value: string) => value,
};

export type InputEmits = typeof inputEmits;
