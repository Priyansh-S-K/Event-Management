

import EventList from '../pages/EventList/EventList'
import FilterEvents from '../pages/FilterEvents/FilterEvents'
import EventDetails from '../pages/EventDetails/EventDetails'
import EventForm from  '../pages/Form/Form';
export const routes = ([
  {path:'/',element:<EventList />},
  {path:'/find-events',element:<FilterEvents/>},
  {path:'/events/:id',element:<EventDetails/>},
  {path:'/form',element: <EventForm />}
])