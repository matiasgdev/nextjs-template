import {render, screen} from '@testing-library/react'
import Home from '../../app/page'

describe('home', () => {
  test('should render title', () => {
    render(<Home />)
    screen.getByRole('heading', {name: /Nextjs Template/})
  })
})
