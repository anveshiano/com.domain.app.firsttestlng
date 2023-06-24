import Home from "../pages/Home";
import Movies from "../pages/Movies";
import NewsFeed from "../pages/NewsFeed";

export default {
  root: "home",
  routes: [
    {
      path: "home",
      component: Home,
      widgets: ["menuwidget"],
    },
    {
      path: "movies",
      component: Movies,
      widgets: ["menuwidget"],
    },
    {
      path: "newsfeed",
      component: NewsFeed,
      widgets: ["menuwidget"],
    },
  ],
};
