
const app = Vue.createApp({
    data() {
        return {
            titulo: 'Este es un hola mundo con vue js v.2',
            cantidad: 100,
            enlace: 'https://youtube.com/bluuweb',
            estado: true,
            servicios: ['transferencias', 'pagos', 'giros', 'compra dolares'],
            desactivar: false
        }
    },
    // Trabajamos con metodos y eventos
    methods: {
        agregarSaldo(){
            this.cantidad = this.cantidad + 100;
        },
        disminuirSaldo(valor){
            if(this.cantidad === 0){
                alert('Saldo en cero!');
                this.desactivar = true;
                return
            }
            this.cantidad = this.cantidad - valor;
        },
    },
    // Propiedad computada. Siempre deben retornar
    computed: {
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger';
        },
        mayusculaTexto(){
            return this.titulo.toUpperCase();
        }
    }
});

var texto = document.getElementById('prueba');


// Hola, es una pregunta muy común y aquí la respuesta oficial: https://es.vuejs.org/v2/guide/computed.html#Caching-computado-vs-Metodos

// Pero en resumen: Se puede lograr el mismo resultado pero las propiedades computadas se almacenan en el caché. Una propiedad computada solo se volverá a evaluar cuando alguna de sus dependencias haya cambiado.

// En comparación, una invocación de método siempre ejecutará la función cada vez que ocurre una re-renderizacion.

// ¿Por qué necesitamos caché? Imagina que tenemos una costosa propiedad computada A, que requiere hacer un bucle a través de una gran matriz y hace muchos cálculos. Entonces podemos tener otras propiedades computadas que a su vez dependen de A. Sin caché, estaríamos ejecutando el captador de A muchas veces más de lo necesario. En los casos en que no desee el almacenamiento en caché, utilice un método en su lugar.