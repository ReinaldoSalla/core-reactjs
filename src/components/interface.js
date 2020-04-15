import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./main-page";
import Routes from "./routes";

export const Interface = (
	<BrowserRouter>
		<MainPage>
			<Routes />
		</MainPage>
	</BrowserRouter>
);

