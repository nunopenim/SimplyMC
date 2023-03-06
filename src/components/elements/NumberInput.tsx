import { component$, Slot } from '@builder.io/qwik';

export default component$(({ id, value, input, onInput$, onDecrement$, onIncrement$ }: any) => {
  return (
    <div class="flex flex-col">
      <label for={id} class="mb-2">
        <Slot />
      </label>
      <RawNumberInput id={id} value={value} input={input} onInput$={onInput$} onDecrement$={onDecrement$} onIncrement$={onIncrement$} />
    </div>
  )
});

export const RawNumberInput = component$(({ id, value, input, onInput$, onDecrement$, onIncrement$ }: any) => {
  return (
    <div class="flex">
      <button data-action="decrement" onClick$={onDecrement$} class={`bg-gray-${input ? 700 : 800} text-white text-2xl hover:bg-gray-${input ? 500 : 700} h-full py-1.5 w-20 rounded-l-md cursor-pointer`}>
          -
      </button>
      {
        input && <input type="number" id={id} value={value} onInput$={onInput$} class="text-lg text-center bg-gray-800 text-gray-50 hover:bg-gray-600 focus:bg-gray-700 px-3 py-2" />
      }
      <button data-action="increment" onClick$={onIncrement$} class={`bg-gray-${input ? 700 : 800} text-white text-2xl hover:bg-gray-${input ? 500 : 700} h-full py-1.5 w-20 rounded-r-md cursor-pointer`}>
          +
      </button>
    </div>
  )
});