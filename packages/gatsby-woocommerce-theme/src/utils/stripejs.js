/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { loadStripe } from '@stripe/stripe-js'

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51I9WtPIL4YSz38Wm3eG1Gkvmp3y8ewXqQF5kCfItAwSKT9vbm4YXc0VqnoSXYCn8nULsYkQwEmODhuUMr2XvqP3i00SxhutLqY")
  }
  return stripePromise
}

export default getStripe
