
import Icon from "@mui/material/Icon";

import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

const bgImageAuth =
  "https://images.unsplash.com/photo-1635944095210-23114a1fb7c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1335&amp;q=80";

const pageRoutes = [
  {
    name: "shop All",
    route: "shop",
  },
  {
    name: "cottage communities",
    collapse: [
      {
        name: "Grand bend",
        route: "community/grand-bend/",
      },
      {
        name: "fawn island",
        route: "community/fawn-island/",
      },
      {
        name: "wasaga beach",
        route: "community/wasaga-beach/",
      },
      {
        name: "view all",
        route: "communities/",
      },
    ],
  },
  {
    name: "Hoodies",
    route: "product-category/hoodies/",
  },
  {
    name: "T-shirts",
    route: "product-category/t-shirts/",
  },
  {
    name: "Youth",
    collapse: [
      {
        name: "T-Shirts",
        route: "product-category/youth/t-shirts-youth/",
      },
      {
        name: "Hoodies",
        route: "product-category/youth/hoodies-youth/",
      },
    ],
  },
];

export default pageRoutes;
