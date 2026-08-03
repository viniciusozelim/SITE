import React, { useState } from 'react';
import { X, Send, Calculator, CheckCircle2, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PrivacyModal from './PrivacyModal';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function QuickQuoteModal({ isOpen, onClose, initialService }: QuickQuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || 'Projeto Elétrico NBR 5410',
    city: '',
    details: ''
  });

  React.useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService, isOpen]);

  const [acceptedLgpd, setAcceptedLgpd] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedLgpd) {
      alert("Por favor, aceite os termos da Política de Privacidade para prosseguir.");
      return;
    }
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setIsSubmitted(true);
    } catch {
      alert("Ocorreu um erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = `Olá OZM Engenharia!\nGostaria de um orçamento para: *${formData.service}*\nNome: ${formData.name || 'Não informado'}\nCidade: ${formData.city || 'Não informada'}\nDetalhes: ${formData.details || 'Sem detalhes fornecidos'}`;
    const url = `https://wa.me/5518991450514?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Projeto Elétrico NBR 5410',
      city: '',
      details: ''
    });
    setAcceptedLgpd(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl shadow-2xl border border-neutral-100 w-full max-w-2xl max-h-[90vh] flex flex-col z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 md:p-8 bg-neutral-950 text-white flex items-center justify-between border-b border-neutral-800">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-600/20 text-primary-500 rounded-2xl border border-primary-500/30">
                <Calculator className="size-6" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-display leading-tight">Solicitar Orçamento Rápido</h3>
                <p className="text-xs text-neutral-400 font-medium">Resposta técnica da equipe OZM Engenharia em até 24 horas</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors"
              aria-label="Fechar modal de orçamento"
            >
              <X className="size-6" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 md:p-8 overflow-y-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="size-12 animate-bounce" />
                </div>
                <h4 className="text-2xl font-bold text-neutral-900 font-display mb-3">Solicitação Enviada com Sucesso!</h4>
                <p className="text-neutral-600 mb-8 max-w-md mx-auto text-sm leading-relaxed">
                  Recebemos os detalhes do seu projeto. Nossa equipe de engenheiros analisará as informações e entrará em contato em breve.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="bg-green-600 text-white font-bold px-6 py-3.5 rounded-2xl hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/20"
                  >
                    <MessageSquare className="size-5" />
                    Falar no WhatsApp Agora
                  </button>
                  <button
                    onClick={resetForm}
                    className="bg-neutral-100 text-neutral-800 font-bold px-6 py-3.5 rounded-2xl hover:bg-neutral-200 transition-all"
                  >
                    Nova Solicitação
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="quote-name" className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Nome Completo *</label>
                    <input
                      id="quote-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: João da Silva"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="quote-phone" className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Telefone / WhatsApp *</label>
                    <input
                      id="quote-phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(18) 99999-9999"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="quote-email" className="text-xs font-bold text-neutral-700 uppercase tracking-wider">E-mail *</label>
                    <input
                      id="quote-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="quote-city" className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Cidade / Estado</label>
                    <input
                      id="quote-city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Ex: Araçatuba / SP"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-service" className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Serviço Desejado *</label>
                  <select
                    id="quote-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all"
                  >
                    <option value="Projeto Elétrico NBR 5410">Projeto Elétrico (NBR 5410)</option>
                    <option value="Automação Industrial">Automação Industrial & Controle</option>
                    <option value="Engenharia Civil & Estruturas">Engenharia Civil & Projetos Estruturais</option>
                    <option value="Laudos e Perícias Técnicas">Laudos e Perícias Técnicas</option>
                    <option value="Laudo Técnico & ART">Laudos Técnicos e Emissão de ART</option>
                    <option value="Outros Serviços">Outros Serviços de Engenharia</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-details" className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Resumo do Projeto / Observações</label>
                  <textarea
                    id="quote-details"
                    name="details"
                    rows={3}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Descreva brevemente o escopo, metragem ou necessidades da sua obra..."
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* LGPD Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="quote-lgpd"
                    required
                    checked={acceptedLgpd}
                    onChange={(e) => setAcceptedLgpd(e.target.checked)}
                    className="mt-0.5 size-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
                  />
                  <label htmlFor="quote-lgpd" className="text-xs text-neutral-600 leading-relaxed select-none">
                    Concordo com o envio dos meus dados para fins de orçamento conforme a{' '}
                    <button
                      type="button"
                      onClick={() => setIsPrivacyOpen(true)}
                      className="text-primary-600 font-bold underline hover:text-primary-700 transition-colors"
                    >
                      Política de Privacidade (LGPD)
                    </button>.
                  </label>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-primary-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-primary-700 disabled:bg-primary-400 transition-all shadow-lg shadow-primary-600/20 active:scale-95 text-sm"
                  >
                    {isSubmitting ? 'Enviando...' : 'Solicitar Proposta Comercial'}
                    {!isSubmitting && <Send className="size-4" />}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="bg-green-50 text-green-700 border border-green-200 font-bold px-5 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-green-100 transition-all text-sm"
                  >
                    <MessageSquare className="size-4 text-green-600" />
                    Enviar via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Footer note */}
          <div className="p-4 bg-neutral-50 border-t border-neutral-100 text-center text-xs text-neutral-500 flex items-center justify-center gap-2">
            <Zap className="size-3.5 text-primary-600" />
            <span>Sem compromisso • Atendimento direto por engenheiros qualificados</span>
          </div>
        </motion.div>
      </div>

      {/* Privacy Policy Modal Child */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </AnimatePresence>
  );
}
