import dotenv from 'dotenv'
dotenv.config()
import StartUseCase from './use_cases/start.js'

(function() {
  StartUseCase.begin()
})()
