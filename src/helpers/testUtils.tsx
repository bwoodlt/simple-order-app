import { render, RenderOptions, RenderResult } from '@testing-library/react';
import {  PropsWithChildren, ReactElement } from 'react';
import {createMemoryHistory}  from 'history'
import { MemoryRouter, Router } from 'react-router-dom';

const providerWrapper = ({children}: PropsWithChildren<unknown>): ReactElement => <MemoryRouter>{children}</MemoryRouter>

export const renderWrapper = (ui: ReactElement, options?: RenderOptions): RenderResult => {
    return render(ui, {wrapper: providerWrapper, ...options}, )
}

export const renderWithMemoryHistory = (ui: ReactElement, route = '/', history = createMemoryHistory({initialEntries: ['/']})) => ({...render(<Router history={history}>{ui}</Router>), history})
