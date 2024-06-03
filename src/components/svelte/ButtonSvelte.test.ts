import '@testing-library/jest-dom'
import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/svelte'

import ButtonSvelte from './ButtonSvelte.svelte';

describe('ButtonSvelte component test', () => {

    test('should display ButtonSvelte component using default initials parameter', async () => {
        render(ButtonSvelte)

        // Valid the default testId attribute
        expect(screen.getByTestId('buttonSvelte')).toBeInTheDocument()
    })
})
