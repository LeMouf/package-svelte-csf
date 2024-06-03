import '@testing-library/jest-dom'
import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/svelte'

import Button from './Button.svelte';

describe('Button component test', () => {

    test('should display Button component using default initials parameter', async () => {
        render(Button)

        // Valid the default testId attribute
        expect(screen.getByTestId('button')).toBeInTheDocument()
    })
})
