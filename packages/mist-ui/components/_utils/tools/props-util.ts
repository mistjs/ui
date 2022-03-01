import { Fragment, Slot, VNode } from 'vue';

export function isFragment(c) {
  return c.length === 1 && c[0].type === Fragment;
}
export function isEmptyElement(c: any) {
  return (
    c &&
    (c.type === Comment ||
      (c.type === Fragment && c.children.length === 0) ||
      (c.type === Text && c.children.trim() === ''))
  );
}

export function filterEmpty(children = []) {
  const res = [];
  children.forEach(child => {
    if (Array.isArray(child)) {
      res.push(...child);
    } else if (child.type === Fragment) {
      res.push(...child.children);
    } else {
      res.push(child);
    }
  });
  return res.filter(c => !isEmptyElement(c));
}

export type PropsVNode = VNode | Slot | VNode[];

export function isValidValue(val: any) {
  return val !== undefined && val !== null;
}
