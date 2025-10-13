import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import CustomeRoute from "./Routes/Router.jsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CustomeRoute />
    </QueryClientProvider>
  </StrictMode>
);
