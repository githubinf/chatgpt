/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Target, 
  Users, 
  BarChart3, 
  MessageSquare, 
  BookOpen, 
  Clock, 
  TrendingUp, 
  AlertTriangle,
  ChevronDown,
  Lock
} from "lucide-react";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="font-sans bg-neutral-950 text-neutral-200 selection:bg-emerald-500 selection:text-black">
      {/* Barra de progreso de lectura (opcional, técnica de sales page) */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 z-50 origin-left"
        style={{ scaleX: 1 }} // En una implementación real usaríamos scrollYProgress
      />

      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-40 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-sm font-medium tracking-wide">
          <span className="font-display font-bold text-emerald-500 italic uppercase">Sistemas IA</span>
          <button 
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-600 hover:bg-emerald-500 transition-colors px-4 py-2 rounded text-white font-semibold cursor-pointer"
          >
            OBTENER EL LIBRO
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block text-emerald-400 font-display font-semibold tracking-[0.2em] uppercase text-xs mb-6 border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
            >
              Sistemas Automatizados con IA
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-7xl font-display font-black text-white leading-tight mb-8"
            >
              CÓMO GANAR <span className="text-emerald-500">DINERO</span> CON CHATGPT
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-neutral-400 max-w-xl mb-10 leading-relaxed font-light"
            >
              No es otro tutorial de prompts mágicos. Es un plano técnico para construir un <span className="text-white font-medium italic">sistema de ingresos automático</span> diseñado para profesionales y emprendedores digitales.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-start gap-6"
            >
              <button 
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-md text-lg font-bold transition-all transform hover:scale-105 shadow-2xl shadow-emerald-600/20 flex items-center gap-3 cursor-pointer"
              >
                OBTENER ACCESO AL PLANO
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> GARANTÍA DE SATISFACCIÓN DE 30 DÍAS
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative group">
              <img 
                src="https://i.ibb.co/LDrzycGZ/como-ganar-dinero-con-chatgpt.png" 
                alt="Portada del libro Cómo ganar dinero con ChatGPT" 
                referrerPolicy="no-referrer"
                className="relative max-w-[320px] lg:max-w-[450px] transform hover:-rotate-1 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Ambient background effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0,transparent_70%)] pointer-events-none -z-10" />
      </header>

      {/* The Story / Problem Section */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <motion.div {...fadeIn}>
          <p className="text-xl md:text-2xl font-light text-neutral-300 italic mb-8 border-l-2 border-emerald-500 pl-8">
            "Imagina que es lunes por la mañana. Tu competencia abre su ordenador con la temida hoja en blanco frente a ellos. Van a pasar las próximas 3 horas peleando con un borrador de correo electrónico, otro par de horas corrigiendo una publicación para LinkedIn, y el resto del día atrapados en tareas que no generan ingresos directos."
          </p>
          <p className="text-lg leading-loose mb-12">
            Y tú… tú ya terminaste.
          </p>
          <p className="text-lg leading-loose mb-12">
            Tu contenido de la semana está generado, revisado y programado. Tus asistentes virtuales calificados están filtrando clientes potenciales y agendando reuniones mientras tomas café. Un producto digital que creaste hace dos meses sigue generando ventas mientras tú te enfocas en lo que realmente importa: estrategia, innovación o simplemente disfrutar de tu tiempo.
          </p>
          
          <div className="space-y-6 text-neutral-400 mb-16">
            <p>
              Este no es el típico escenario de "libertad financiera" que ves en anuncios de YouTube. Es la realidad técnica de quienes han dejado de usar la IA como un juguete y han empezado a tratarla como una infraestructura de servidor.
            </p>
            <p>
              La mayoría de los emprendedores están agotados. Están intentando ser creadores de contenido, estrategas de marketing, agentes de soporte y directores comerciales al mismo tiempo. Es humanamente imposible mantener ese ritmo sin sacrificar calidad o salud mental.
            </p>
            <p>
              Ahí es donde entran los sistemas. Un sistema es un proceso que funciona de manera predecible, repetible y escalable. ChatGPT no es solo un chat; es el motor cognitivo más potente jamás creado, capaz de ejecutar esos procesos por ti, si sabes cómo darle las instrucciones adecuadas.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-12 rounded-lg text-center mb-16">
            <h3 className="font-display text-3xl font-bold text-white mb-6 underline decoration-emerald-500 decoration-3 underline-offset-8">¿Magia?</h3>
            <p className="text-4xl font-black text-emerald-500 uppercase tracking-tighter">No. Sistemas.</p>
          </div>
        </motion.div>

        <motion.div {...fadeIn} className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
            ¿Por qué la mayoría fracasa con ChatGPT (y tú no vas a fracasar)?
          </h2>
          <p className="text-neutral-400">
            Cuando salió ChatGPT, el Internet se llenó de presuntos expertos en la "fórmula mágica". Te prometieron que con copiar y pegar tres líneas vivirías de ingresos pasivos.
          </p>
          <p className="font-semibold text-white">Lo intentaste. Y… nada.</p>
          <p className="text-neutral-400">
            Obtuviste respuestas genéricas, contenido que sonaba igual que el de otros mil, y una sensación frustrante de que la herramienta era poderosa… pero no para tu negocio real.
          </p>
          <div className="py-8 space-y-4">
            <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-sm">¿El error fundamental?</h4>
            <p className="text-xl text-neutral-300">
              No eras tú. Era el método. La mayoría trata a ChatGPT como un motor de búsqueda conversacional. Le hacen preguntas, reciben respuestas, y se quedan ahí.
            </p>
          </div>
          <p className="text-lg border-t border-neutral-800 pt-8 italic text-neutral-500">
            Los profesionales que están construyendo negocios reales —ingresos recurrentes, agencias escalables, consultoría automatizada— hacen algo diferente:
          </p>
          <p className="text-2xl font-display font-bold text-white text-center py-6">
            No piden. <span className="text-emerald-500 uppercase">Diseñan.</span><br />
            No reaccionan. <span className="text-emerald-500 uppercase">Orquestan.</span>
          </p>
        </motion.div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-neutral-900/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <BookOpen className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              ¿Qué vas a conseguir con este libro?
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              No es un manual de teoría abstracta. Es un plano de construcción técnica. Página a página, vas a pasar de ser un usuario de IA a convertirte en un arquitecto de sistemas productivos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Zap className="w-6 h-6" />}
              title="Sistema de Contenido Automatizado"
              description="Implementa una factoría de contenido que genere artículos, publicaciones y correos electrónicos manteniendo tu voz única, tu estrategia de marca y un alto nivel de conversión. Di adiós para siempre a la parálisis de la hoja en blanco."
            />
            <BenefitCard 
              icon={<MessageSquare className="w-6 h-6" />}
              title="Chatbot Comercial de Alta Conversión"
              description="No hablo de un contestador aburrido. Aprenderás a configurar un sistema conversacional que califica leads, resuelve objeciones específicas, educa al cliente y agenda ventas directas mientras tú descansas."
            />
            <BenefitCard 
              icon={<BarChart3 className="w-6 h-6" />}
              title="Productos Digitales Escalables"
              description="Crea cursos, libros electrónicos y plantillas utilizando IA, pero estructurados bajo métodos pedagógicos probados. Construye activos digitales listos para generar flujos de ingresos recurrentes."
            />
            <BenefitCard 
              icon={<Users className="w-6 h-6" />}
              title="Sistematización de Servicios"
              description="Deja de intercambiar desesperadamente horas por dinero. Aprende a empaquetar tu conocimiento y sistematizar tu consultoría para atender a un volumen masivo de clientes sin multiplicar tu carga laboral."
            />
            <BenefitCard 
              icon={<Target className="w-6 h-6" />}
              title="Ecosistema de Múltiples Flujos"
              description="No dependas de una sola fuente inestable. Aprenderás a conectar productos, servicios y procesos automáticos que se retroalimenten entre sí en una sinergia perfecta de ingresos."
            />
            <BenefitCard 
              icon={<TrendingUp className="w-6 h-6" />}
              title="Gestión y Escalamiento Real"
              description="Un sistema no sirve de nada si no se puede escalar. Obtendrás métricas clave, marcos de gestión y técnicas de optimización continua para que tu estructura crezca de forma sólida y estable."
            />
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="bg-neutral-900 border-2 border-emerald-500/20 p-12 rounded-xl relative">
            <div className="absolute -top-6 left-12 bg-emerald-600 text-white px-6 py-2 rounded font-bold uppercase text-sm">
              IMPORTANTE
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
              Esto no es para cualquiera (y está bien)
            </h2>
            <p className="text-lg text-neutral-400 mb-10 leading-relaxed">
              Este libro <span className="font-bold text-white uppercase tracking-tighter underline decoration-red-500 decoration-2">no es</span> para quien busca un esquema piramidal o una promesa vacía de "haz clic aquí y gana diez mil dólares mañana". Si buscas fórmulas mágicas sin esfuerzo, por favor, cierra esta página ahora mismo.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> SÍ es para ti si:
                </h4>
                <ul className="space-y-4 text-neutral-300">
                  <li className="flex gap-2"><span>✔️</span> Ya tienes un negocio, servicios o conocimientos que quieres escalar con IA.</li>
                  <li className="flex gap-2"><span>✔️</span> Estás cansado de trabajar jornadas agotadoras y sentir que tus ingresos tienen un techo infranqueable.</li>
                  <li className="flex gap-2"><span>✔️</span> Entiendes que la automatización no es para eliminar tu criterio humano, sino para multiplicarlo.</li>
                  <li className="flex gap-2"><span>✔️</span> Quieres construir algo sostenible, medible y que funcione de forma autónoma.</li>
                </ul>
              </div>
              <div className="space-y-6">
                 <h4 className="text-neutral-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-neutral-500" /> NO es para ti si:
                </h4>
                <ul className="space-y-4 text-neutral-500">
                  <li className="flex gap-2"><span>❌</span> Buscas resultados sin aplicar ningún tipo de esfuerzo o sistema.</li>
                  <li className="flex gap-2"><span>❌</span> Crees que la Inteligencia Artificial es una varita mágica que piensa por ti.</li>
                  <li className="flex gap-2"><span>❌</span> Prefieres los atajos momentáneos antes que los cimientos de un negocio real.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Methodology Section (The 8 Methods) */}
      <section className="py-24 bg-black border-y border-neutral-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-white mb-6 italic">
              Metodologías Propias: El Plano Técnico
            </h2>
            <p className="text-lg text-neutral-400">
              Francisco González ha documentado cada fracaso y cada ajuste hasta encontrar lo que realmente funciona. Aquí no hay adivinanzas, solo marcos de trabajo funcionales.
            </p>
          </motion.div>

          <div className="space-y-6">
            <MethodItem number="01" name="CRISP" label="Dominio del Prompting" description="El marco estructurado para ir más allá de las instrucciones básicas y obtener resultados consistentes, predecibles y de alta calidad técnica." />
            <MethodItem number="02" name="N.I.C.H.E." label="Investigación de Mercado" description="Cómo identificar oportunidades altamente rentables antes de invertir un solo minuto o dólar en desarrollo." />
            <MethodItem number="03" name="C.O.N.T.E.N.T.O.S." label="Factoría de Valor" description="La automatización total de la creación de contenido que educa y vende sin sacrificar la esencia de tu marca." />
            <MethodItem number="04" name="C.A.R.R.I.L." label="Chatbots de Venta" description="Configuración de flujos conversacionales lógicos que guían al usuario desde la curiosidad hasta la transacción final." />
            <MethodItem number="05" name="A.R.M.A." label="Arquitectura de Productos" description="El método para estructurar, empaquetar y lanzar productos digitales informativos de alto valor percibido." />
            <MethodItem number="06" name="D.I.R.I.G.E." label="Servicios Profesionales" description="Sistematización de consultorías y agencias para maximizar el margen de beneficio por cliente atendido." />
            <MethodItem number="07" name="I.N.G.R.E.S.O.S." label="Diversificación Sinfónica" description="Cómo conectar diferentes fuentes de ingreso para que trabajen en conjunto, creando una red de seguridad financiera." />
            <MethodItem number="08" name="E.S.C.A.L.A." label="Crecimiento Sostenible" description="El plan por etapas para aumentar el volumen de negocio sin colapsar la estructura operativa ni el servicio al cliente." />
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-emerald-500 text-emerald-500 font-bold rounded-lg hover:bg-emerald-500 hover:text-black transition-all cursor-pointer"
            >
              QUIERO ESTAS METODOLOGÍAS
            </button>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 px-6 bg-neutral-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Estructura Detallada</h2>
            <div className="h-1 w-20 bg-emerald-500 mb-8" />
          </motion.div>

          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-emerald-400 uppercase tracking-widest">Parte 1: Fundamentos (2 capítulos)</h3>
              <ul className="space-y-4 border-l border-neutral-800 ml-4 pl-8">
                <li className="text-neutral-300">Capítulo 1: Dominando ChatGPT - Más Allá del Prompt Básico</li>
                <li className="text-neutral-300">Capítulo 2: Análisis de Viabilidad - Identificando Tu Nicho Rentable</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-emerald-400 uppercase tracking-widest">Parte 2: Implementación (4 capítulos)</h3>
              <ul className="space-y-4 border-l border-neutral-800 ml-4 pl-8">
                <li className="text-neutral-300">Capítulo 3: Sistema de Generación de Contenido Automatizado</li>
                <li className="text-neutral-300">Capítulo 4: Chatbots Comerciales que Realmente Venden</li>
                <li className="text-neutral-300">Capítulo 5: Productos Digitales con ChatGPT - De Cero a Primer Venta</li>
                <li className="text-neutral-300">Capítulo 6: Automatización de Servicios Profesionales</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-emerald-400 uppercase tracking-widest">Parte 3: Escalamiento (2 capítulos)</h3>
              <ul className="space-y-4 border-l border-neutral-800 ml-4 pl-8">
                <li className="text-neutral-300">Capítulo 7: Flujos de Ingreso Múltiples y Automatización</li>
                <li className="text-neutral-300">Capítulo 8: Optimización y Escalamiento Sostenible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Content / Long Copy Extension */}
      {/* Para alcanzar las 3000 palabras necesitamos expandir conceptos técnicos y beneficios */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <motion.div {...fadeIn} className="prose prose-invert prose-emerald max-w-none space-y-12 text-neutral-300 leading-relaxed text-lg">
          <h2 className="text-4xl font-display font-black text-white italic underline decoration-emerald-500 decoration-4">Por qué necesitas sistemas, no trucos.</h2>
          
          <p>
            Vivimos en una era de saturación informativa. Cada día aparece un nuevo "hilo de X" o un video de TikTok prometiéndote el prompt definitivo para hacerte millonario. Si estás aquí, es porque ya sabes que eso no funciona. El problema no es la herramienta; el problema es que estás tratando de correr un maratón sin zapatillas, confiando en que un "truco" te lleve a la meta.
          </p>

          <p>
            La Inteligencia Artificial no es una moda pasajera, es un cambio de paradigma equivalente a la Revolución Industrial. En aquel entonces, quienes simplemente "usaban" las máquinas sobrevivieron, pero quienes las <span className="text-white italic">sistematizaron</span> en líneas de producción se volvieron los líderes de su industria.
          </p>

          <p>
            Este libro te enseña precisamente eso: a dejar de ser un operario que le pide cosas a una máquina y empezar a ser el dueño de la fábrica. Cuando hablo de un <span className="text-emerald-400 font-bold">sistema de ingresos</span>, me refiero a una estructura donde la entrada es mínima (tu estrategia y supervisión) y la salida es máxima (valor para el cliente y dinero para ti).
          </p>

          <h3 className="text-2xl font-display font-bold text-white uppercase italic tracking-wider">La Trampa de los Prompts Mágicos</h3>
          <p>
            Muchos creen que la clave del éxito con ChatGPT es tener una colección de 500 prompts guardados en un Excel. Error. Los prompts son como los ingredientes de una receta; si no sabes cocinar, tener la mejor sal del mundo no salvará tu plato. En este libro, hackeamos tu cerebro para que entiendas la <span className="italic">lógica subyacente</span> del lenguaje de los modelos LLM (Large Language Models).
          </p>
          <p>
            Aprenderás que un prompt profesional no es una orden, es una arquitectura de contexto. Aprenderás a definir niveles de temperatura, a estructurar la respuesta en formatos específicos (JSON, Markdown, tablas) y a forzar al modelo a seguir un razonamiento de cadena de pensamiento (<span className="italic">Chain of Thought</span>) para evitar errores lógicos comunes.
          </p>

          <h3 className="text-2xl font-display font-bold text-white uppercase italic tracking-wider">Método CRISP: La Columna Vertebral</h3>
          <p>
            El método CRISP (Contexto, Rol, Instrucción, Soportes, Post-procesamiento) que he desarrollado es la herramienta que te permitirá obtener resultados que parecen escritos por un experto con 20 años de experiencia. No es un formulario aburrido; es un marco de trabajo que te obliga a pensar estratégicamente antes de pulsar la tecla "Enter".
          </p>
          <p>
            Al dominar CRISP, tus artículos ya no parecerán "generados por IA". Tendrán ritmo, tono humano, datos específicos y, sobre todo, cumplirán un objetivo de negocio. Porque en el mundo real, no queremos contenido bonito, queremos contenido que convierta.
          </p>

          <h3 className="text-2xl font-display font-bold text-white uppercase italic tracking-wider">Automatización de Contenidos: Tu Clon Digital</h3>
          <p>
            Imagina tener un equipo de redacción disponible las 24 horas del día por el coste de una suscripción mensual. En la Parte 2 del libro, configuramos tu "Factoría de Contenidos". Te enseño cómo crear un ecosistema donde una sola idea se transforma automáticamente en: un hilo para redes sociales, un guion para video corto, un artículo SEO optimizado y un correo para tu lista de suscriptores.
          </p>
          <p>
            Lo mejor de este sistema es que se retroalimenta. A medida que publicas, el sistema aprende de lo que funciona y ajusta los siguientes prompts para mejorar la efectividad. Es una máquina de aprendizaje aplicada a tu marca personal o negocio.
          </p>

          <h3 className="text-2xl font-display font-bold text-white uppercase italic tracking-wider">Chatbots Comerciales: El Vendedor que Nunca Duerme</h3>
          <p>
            El capítulo 4 es, para muchos, el que amortiza la inversión del libro en la primera semana. Un chatbot configurado bajo mi método C.A.R.R.I.L. no es un juguete que repite frases hechas. Es un embudo de ventas conversacional.
          </p>
          <p>
            Hablamos de sistemas que pueden:
          </p>
          <ul>
            <li>Detectar el nivel de urgencia de un cliente potencial.</li>
            <li>Resolver las 3 objeciones de precio más comunes antes de que el cliente las mencione.</li>
            <li>Cualificar si un lead tiene el presupuesto necesario para tus servicios premium.</li>
            <li>Agendar automáticamente la llamada en tu calendario solo si el lead cumple tus criterios.</li>
          </ul>

          <h3 className="text-2xl font-display font-bold text-white uppercase italic tracking-wider">Productos Digitales con el Método A.R.M.A.</h3>
          <p>
            Construir un producto digital es fácil con IA. Construir uno que se venda y que reduzca las devoluciones es un arte. Con A.R.M.A. (Arquitectura, Redacción, Maquetación, Automatización), aprenderás a usar ChatGPT para estructurar el currículo de un curso, redactar los módulos con coherencia pedagógica y crear los materiales de apoyo (ejercicios, checklists, plantillas) que tus alumnos amarán.
          </p>
          <p>
            Dejarás de vender "información" para empezar a vender "transformación". Y la IA será tu copiloto en cada paso del proceso, reduciendo semanas de trabajo a apenas un par de tardes de orquestación.
          </p>

          <h3 className="text-2xl font-display font-bold text-white uppercase italic tracking-wider">Escalamiento: El Camino hacia la Libertad</h3>
          <p>
            Finalmente, en la Parte 3, nos enfocamos en el largo plazo. Un negocio que depende de ti es un trabajo, no un negocio. Te enseño cómo diversificar tus ingresos sin volverte loco. Cómo usar la IA para auditar tu propia operativa, detectar cuellos de botella y decidir cuándo es el momento de escalar la inversión en publicidad o contratar a un asistente humano para supervisar a tus asistentes artificiales.
          </p>
          <p>
            Es el plano definitivo para pasar de "ganar dinero con la IA" a "tener un negocio rentable potenciado por la IA".
          </p>
        </motion.div>
      </section>

      {/* Proof / Testimonials Section */}
      <section className="py-24 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16 italic">
            <h2 className="text-3xl font-display font-bold text-white underline decoration-emerald-500 decoration-2 underline-offset-8">Casos reales (sin humo)</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Un consultor de marketing digital implementó el sistema de chatbots y pasó de cualificar leads manualmente a automatizar el proceso. Redujo su carga de trabajo en 15 horas semanales y aumentó sus ingresos en un 210% en 90 días."
              author="Caso de Estudio: Consultoría"
              metric="+210% Facturación"
            />
            <TestimonialCard 
              quote="Un creador de contenido digital usó el método A.R.M.A. para lanzar su primer curso. En 30 días facturó $12.000 sin invertir en publicidad, solo con su base de email y los funnels automatizados."
              author="Caso de Estudio: Creador Digital"
              metric="$12.000 en 30 días"
            />
            <TestimonialCard 
              quote="Una agencia de servicios profesionales aplicó el sistema de escalamiento D.I.R.I.G.E. y pasó de atender 12 clientes a 45, manteniendo la calidad y reduciendo el estrés operativo del equipo."
              author="Caso de Estudio: Agencia"
              metric="+375% Capacidad"
            />
          </div>
          <p className="mt-12 text-center text-neutral-500 italic text-sm">
            * Estos no son éxitos mágicos. Son resultados de aplicar sistemas estructurados donde antes había improvisación.
          </p>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section id="cta" className="py-32 px-6 bg-emerald-950/20 relative">
        <div className="max-w-4xl mx-auto text-center border-2 border-emerald-500 p-16 rounded-2xl bg-neutral-950 shadow-[0_0_50px_rgba(16,185,129,0.15)] relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rotate-45 translate-x-16 -translate-y-16" />
          
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 uppercase tracking-tighter">
              Acepta el Reto de los Sistemas
            </h2>
            <p className="text-xl text-neutral-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              Consigue hoy mismo el libro digital, las 8 metodologías completas, las plantillas de prompts y el plan de escalamiento detallado.
            </p>
            
            <div className="inline-block relative mb-12">
              <span className="block text-6xl md:text-8xl font-black text-white tracking-tight italic">
                <span className="text-emerald-500">$</span>9,99
              </span>
              <span className="absolute -top-4 -right-8 bg-white text-black px-3 py-1 rounded text-xs font-black uppercase rotate-12">
                PAGO ÚNICO
              </span>
            </div>

            <div className="flex flex-col items-center gap-8">
              <a 
                href="https://fcofrancis.pay.clickbank.net/?cbitems=14"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full max-w-md bg-emerald-500 hover:bg-emerald-400 text-black py-6 rounded font-black text-xl transition-all flex items-center justify-center gap-4 shadow-xl shadow-emerald-500/30"
              >
                <Lock className="w-6 h-6" />
                SÍ, QUIERO EL SISTEMA AHORA
              </a>
              
              <div className="flex flex-wrap justify-center gap-8 text-neutral-500 text-sm font-medium uppercase tracking-[0.2em]">
                <span className="flex items-center gap-2 tracking-widest"><Cpu className="w-4 h-4" /> IA Optimizada</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Acceso Inmediato</span>
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Pago Seguro</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 px-6 border-b border-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <ShieldCheck className="w-16 h-16 text-emerald-500 mx-auto mb-8" />
            <h2 className="text-3xl font-display font-bold text-white mb-6 uppercase italic">Garantía Blindada de 30 Días</h2>
            <p className="text-lg text-neutral-400 leading-relaxed italic mb-8">
              "Compra el libro. Léelo. Aplica los primeros ejercicios. Si en los próximos 30 días no sientes que este contenido te ha entregado herramientas técnicas claras, métodos aplicables y un plan real para generar ingresos con ChatGPT… te devuelvo cada centavo."
            </p>
            <p className="font-bold text-white uppercase tracking-[0.2em] text-sm mb-12">Sin condiciones. Sin preguntas incómodas.</p>
            
            <button 
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-neutral-900 border border-neutral-700 px-8 py-4 rounded text-neutral-300 font-bold hover:border-emerald-500 hover:text-emerald-500 transition-all cursor-pointer"
            >
              PROBAR SIN RIESGO
            </button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-16 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-8">
            <FAQItem 
              question="¿Necesito conocimientos de programación para aplicar los sistemas?"
              answer="No. Todo el libro está diseñado para que cualquier persona con voluntad de aprender pueda construir sistemas complejos usando lenguaje natural. La IA se encarga de la parte técnica pesada; tú te encargas de la lógica y la estrategia."
            />
            <FAQItem 
              question="¿Este método funcionará si ChatGPT se actualiza?"
              answer="Sí. No enseñamos 'hacks' temporales. Enseñamos metodologías de diseño y arquitectura de sistemas. Los principios de validación de nichos y psicología de ventas son universales y trascienden a cualquier versión específica de la herramienta."
            />
            <FAQItem 
              question="¿Cuánto tiempo tardaré en ver los primeros resultados?"
              answer="El primer capítulo está dedicado a dominar el prompting avanzado. Verás una mejora drástica en la calidad de tus resultados desde el día uno. La construcción del sistema completo dependerá de tu ritmo de implementación, pero el plan está diseñado para ejecutarse en 90 días."
            />
            <FAQItem 
              question="¿Por qué el precio es tan bajo?"
              answer="Queremos democratizar el acceso al conocimiento de calidad. Sabemos que una vez que veas el valor de nuestras metodologías de base, querrás explorar nuestras soluciones de escalamiento más avanzadas en el futuro. Es nuestra mejor carta de presentación."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-neutral-900 text-center text-neutral-600 text-sm">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-black text-emerald-500 tracking-[0.3em] uppercase">SISTEMAS DISRUPTIVOS IA</p>
          <p className="max-w-2xl mx-auto italic mb-8">
            "Este libro no es para quien busca atajos. Es para quien está dispuesto a construir sistemas reales que generen valor genuino en el mercado."
          </p>
          <p>© Cómo ganar dinero con Chatgpt. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="p-8 bg-neutral-950 border border-neutral-800 rounded-lg hover:border-emerald-500/50 transition-all shadow-xl"
    >
      <div className="p-3 bg-emerald-500/10 rounded-lg inline-block text-emerald-500 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4 italic">{title}</h3>
      <p className="text-neutral-500 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
}

function MethodItem({ number, name, label, description }: { number: string, name: string, label: string, description: string }) {
  return (
    <div className="group flex gap-8 p-8 border border-neutral-900 rounded-lg hover:bg-neutral-900/40 transition-colors">
      <div className="text-3xl font-display font-black text-neutral-800 group-hover:text-emerald-500/20 transition-colors shrink-0">
        {number}
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <h4 className="text-2xl font-bold text-white tracking-widest">{name}</h4>
          <span className="text-[10px] uppercase font-black px-2 py-0.5 bg-neutral-800 text-neutral-400 rounded group-hover:bg-emerald-500 group-hover:text-black transition-colors">{label}</span>
        </div>
        <p className="text-neutral-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, author, metric }: { quote: string, author: string, metric: string }) {
  return (
    <div className="p-8 bg-neutral-950 border-l border-neutral-800 italic relative group hover:border-emerald-500 transition-colors">
      <p className="text-neutral-400 mb-8 leading-loose relative z-10 font-light">"{quote}"</p>
      <div className="space-y-1">
        <p className="text-white font-bold not-italic font-display">{author}</p>
        <p className="text-emerald-500 font-black not-italic text-sm uppercase tracking-widest">{metric}</p>
      </div>
      <div className="absolute bottom-4 right-4 text-neutral-900 font-black text-6xl pointer-events-none group-hover:text-emerald-500/5 transition-colors">"</div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="border-b border-neutral-900 pb-8 prose prose-invert max-w-none">
      <h4 className="text-xl font-bold text-white flex items-center justify-between group cursor-default">
        {question}
        <ChevronDown className="w-5 h-5 text-neutral-700 group-hover:text-emerald-500 transition-colors" />
      </h4>
      <p className="text-neutral-500 mt-4 leading-relaxed font-light italic">
        {answer}
      </p>
    </div>
  );
}
