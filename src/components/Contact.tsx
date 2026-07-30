import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Facebook, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Projeto Elétrico',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending email/message
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: 'Projeto Elétrico', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Fale Conosco</span>
            <h2 className="heading-lg text-neutral-900 mb-8 font-display">Pronto para iniciar seu <span className="text-primary-600">novo projeto</span> conosco?</h2>
            <p className="text-neutral-600 text-lg mb-12">Preencha o formulário ao lado ou entre em contato pelos nossos canais diretos. Nossa equipe técnica está disponível para tirar suas dúvidas e desenvolver a melhor solução para sua empresa.</p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary-50 p-4 rounded-2xl text-primary-600">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-lg mb-1">Localização</h4>
                  <p className="text-neutral-600 italic">Araçatuba, SP<br />Brasil</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-primary-50 p-4 rounded-2xl text-primary-600">
                  <Phone className="size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-lg mb-1">Telefone</h4>
                  <p className="text-neutral-600">+55 (18) 99145-0514</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary-50 p-4 rounded-2xl text-primary-600">
                  <Mail className="size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-lg mb-1">E-mail</h4>
                  <p className="text-neutral-600">eng.viniciusozelim@hotmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold text-neutral-900 mb-6">Siga-nos nas Redes Sociais</h4>
              <div className="flex gap-4">
                {[
                  { Icon: Linkedin, href: "https://linkedin.com/company/ozm-engenharia", label: "LinkedIn" },
                  { Icon: Instagram, href: "https://instagram.com/ozmengenharia", label: "Instagram" },
                  { Icon: Facebook, href: "https://facebook.com/ozmengenharia", label: "Facebook" }
                ].map(({ Icon, href, label }, i) => (
                  <a 
                    key={i} 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={label}
                    className="bg-neutral-100 p-3 rounded-xl text-neutral-600 hover:bg-primary-600 hover:text-white transition-all"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-50 p-10 rounded-[2.5rem] shadow-sm border border-neutral-100 min-h-[500px] flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <CheckCircle2 className="size-12 animate-bounce" />
                  </div>
                  <h3 className="text-3xl font-display font-extrabold text-neutral-900 mb-4">Mensagem Enviada!</h3>
                  <p className="text-neutral-600 mb-8 font-medium max-w-sm mx-auto">
                    Agradecemos o contato. Nossa equipe técnica analisará sua solicitação e responderá o mais breve possível.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="bg-primary-600 text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-primary-700 transition-all active:scale-95 shadow-lg shadow-primary-600/20"
                  >
                    Enviar Outra Mensagem
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name-input" className="text-sm font-bold text-neutral-700 ml-1">Nome Completo</label>
                      <input 
                        id="name-input"
                        name="name"
                        type="text" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome" 
                        className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email-input" className="text-sm font-bold text-neutral-700 ml-1">E-mail Corporativo</label>
                      <input 
                        id="email-input"
                        name="email"
                        type="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com" 
                        className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject-input" className="text-sm font-bold text-neutral-700 ml-1">Assunto</label>
                    <select 
                      id="subject-input"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all"
                    >
                      <option value="Projeto Elétrico">Projeto Elétrico</option>
                      <option value="Automação Industrial">Automação Industrial</option>
                      <option value="Engenharia Civil">Engenharia Civil</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message-input" className="text-sm font-bold text-neutral-700 ml-1">Mensagem</label>
                    <textarea 
                      id="message-input"
                      name="message"
                      rows={5} 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva seu projeto ou dúvida..." 
                      className="w-full bg-white border border-neutral-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-sm font-semibold ml-1">
                      Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
                    </p>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-primary-700 disabled:bg-primary-400 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary-600/20 active:scale-95 group"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    {!isSubmitting && <Send className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary-50 rounded-bl-[100px] -z-0"></div>
    </section>
  );
}
