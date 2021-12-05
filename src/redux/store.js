/* Store Setup​ (from official redux docs)

Can or should I create multiple stores? Can I import my store directly, and use it in components myself?​

The original Flux pattern describes having multiple “stores” in an app,
each one holding a different area of domain data.
This can introduce issues such as needing to have one store “waitFor” another store to update.
This is not necessary in Redux because
the separation between data domains is already achieved by splitting a single reducer into smaller reducers.

As with several other questions, it is possible to create multiple distinct Redux stores in a page,
but the intended pattern is to have only a single store.
Having a single store enables using the Redux DevTools,
makes persisting and rehydrating data simpler, and simplifies the subscription logic.

Some valid reasons for using multiple stores in Redux might include:

- Solving a performance issue caused by too frequent updates of some part of the state, when confirmed by profiling the app.
- Isolating a Redux app as a component in a bigger application, in which case you might want to create a store per root component instance.

However, creating new stores shouldn't be your first instinct.
Try reducer composition first, and only use multiple stores if it doesn't solve your problem.

Similarly, while you can reference your store instance by importing it directly,
this is not a recommended pattern in Redux.
If you create a store instance and export it from a module, it will become a singleton.
This means it will be harder to isolate a Redux app as a component of a larger app,
if this is ever necessary, or to enable server rendering,
because on the server you want to create separate store instances for every request.

It's best if you wrap your root component in <Provider store={store}> and let React Redux worry about passing the store down.
This way components don't need to worry about importing a store module, and isolating a Redux app or enabling server rendering is much easier to do later.

*/

import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './features/playerSlice'
import gameReducer from './features/gameSlice'

export default configureStore({
  reducer: {
    players: playerReducer,
    game: gameReducer
  }
});
