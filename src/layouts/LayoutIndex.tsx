import { defineComponent, defineAsyncComponent, Fragment } from 'vue';
import type { DefineComponent } from 'vue';

const DefaultComponent = defineComponent({
  template: '<template></template>'
});

export function createComponent(name: string, ...components: any[]) {
  const TheHeader: DefineComponent = defineAsyncComponent(components[0]) ?? DefaultComponent;
  const TheMain: DefineComponent = defineAsyncComponent(components[1]) ?? DefaultComponent;
  const TheFooter: DefineComponent = defineAsyncComponent(components[2]) ?? DefaultComponent;
  // return h(Fragment, null, [TheHeaderVue, TheMainVue, TheFooterVue])

  return defineComponent({
    conputed() {
      // index: {
      //   return `
      //   .index {
      //     background-color: red;
      //     color: white;
      //   }
      // `
      // }
    },
    render() {
      return (
        <Fragment>
          <TheHeader class="inner"></TheHeader>
          <TheMain></TheMain>
          <TheFooter class="inner"></TheFooter>
        </Fragment>
      );
    }
  });
}
