import React, { Component } from "react";
import Loadable from 'react-loadable';
import ViewLoadingComponent from '../view/viewLoading'

export default function asyncComponent(importComponent,LoadingComponent=ViewLoadingComponent) {
  return Loadable({
    loader: importComponent,
    loading: LoadingComponent
  });
}
