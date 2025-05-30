import { writable } from "svelte/store";

export const modal = writable<true | false>(false);