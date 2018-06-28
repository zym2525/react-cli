'use strict'

import { createAction } from 'redux-actions'
import {
  LOGIN
} from '../constants/actionType'

import * as userService from '../services/userService'

export const login = createAction(
  LOGIN,
  async (params) => {
    return await userService.login(params)
  },
  (params, resolved, rejected) => ({
    resolved,
    rejected,
    judge: result => result != null
  })
)

export const getSceneInfo = createAction(
  LOGIN,
  async () => {
    return await userService.getSceneInfo()
  }
)