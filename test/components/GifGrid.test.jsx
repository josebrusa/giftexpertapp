import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')


describe('Prubes en <GifGrid />', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true

        })
        
        const category = 'goku';

        render( <GifGrid category={ category} /> );

        expect( screen.getByText('Loading...'));
        expect( screen.getByText( category ));

        // screen.debug();
    });

    test('debe de mostrar items cuandoo se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id:'ABC',
                title:'goku',
                url:'https://localhost/goku.jpg'
            },
            {
                id:'123',
                title:'saitama',
                url:'https://localhost/saitama.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false

        });

        render( <GifGrid category={ category } /> );

        expect( screen.getAllByRole('img').length ).toBe(2)


        screen.debug();

    })
    
    
})
