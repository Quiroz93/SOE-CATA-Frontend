<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Primitive, type PrimitiveProps } from "radix-vue";
import type { ButtonVariants } from "./index";
import { buttonVariants } from "./index";
import { cn } from "src/lib/utils";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
  asChild?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  asChild: false,
});

const { as, asChild, variant, size, class: className } = props;
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), className)"
  >
    <slot />
  </Primitive>
</template>
