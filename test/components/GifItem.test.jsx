import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"


describe('Pruebas en <GifItem />', () => {
    
    const title = 'Goku';
    const url = 'https://media0.giphy.com/media/19JSJ5ucu91R5D7a3w/giphy.gif?cid=b4594af3wkjgme17ipph4m951gl81jxch43390iaao8g2v3e&ep=v1_gifs_search&rid=giphy.gif&ct=g';


    test('debe realizar match con el snapshot ', () => {

        const {container } = render( <GifItem title={title} url={url} />);
        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el url y el alt indicado', () => {
        
        render( <GifItem title={ title } url={ url } />);
        // screen.debug();

        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('debe de mostrar el titulo en el componenete', () => {

        render( <GifItem url={ url } title={ title } />);

        // screen.debug();
        expect( screen.getByText( title ) ).toBeTruthy();
    });
    
});
