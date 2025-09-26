import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('renders landing page', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    expect(screen.getByText(/galaxy/i)).toBeInTheDocument();
});
