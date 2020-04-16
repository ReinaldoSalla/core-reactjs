import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainPage from "../base-layout/";
import Routes from "../routes/";

export const Interface = (
	<BrowserRouter>
		<MainPage>
			<Routes />
		</MainPage>
	</BrowserRouter>
);

