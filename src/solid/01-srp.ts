(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    // Agregamos el servicio de productos
    class ProductService {
        private httpAdapter: Object = {};

        getProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        postProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    }
    
     //Agregamos el servicio de correo
    class Mailer {
        private masterEmail: string = 'admin@example.com';

        sendEmail( emailList: string[], subject: string, body: string ) {
            console.log('Enviando correo a clientes', emailList, subject, body );
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            // console.log('Producto: ',{ id, name: 'OLED Tv' });
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            // console.log('Guardando en base de datos', product );
            this.productService.postProduct(product);
        }
    
        notifyClients() {
            // console.log('Enviando correo a los clientes');
            this.mailer.sendEmail(['admin@example.com'], 'Nuevo producto', 'Nuevo producto' );
        }
    
        // onAddToCart( productId: number ) {
        //     // Agregar al carrito de compras
        //     console.log('Agregando al carrito ', productId );
        // }
    
    }


    class CartBloc{

        private intemsInCart: Object[] = [];

        addToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }
    }
    

    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);








})();