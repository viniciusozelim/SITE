import { X, ShieldCheck, Lock, FileText, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl shadow-2xl border border-neutral-100 w-full max-w-3xl max-h-[85vh] flex flex-col z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 md:p-8 bg-neutral-900 text-white flex items-center justify-between border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-primary-600/20 text-primary-500 rounded-xl border border-primary-500/30">
                <ShieldCheck className="size-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display leading-tight">Política de Privacidade</h3>
                <p className="text-xs text-neutral-400 font-medium">Conformidade com a LGPD (Lei nº 13.709/2018)</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors"
              aria-label="Fechar política de privacidade"
            >
              <X className="size-6" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-neutral-700 text-sm leading-relaxed">
            <div className="bg-primary-50 border border-primary-100 p-4 rounded-2xl flex items-start gap-3 text-primary-900">
              <Lock className="size-5 text-primary-600 shrink-0 mt-0.5" />
              <p className="text-xs font-medium">
                A <strong>OZM Engenharia</strong> se compromete com a segurança e transparência no tratamento dos dados pessoais de seus clientes e parceiros.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-neutral-900 text-base mb-2 flex items-center gap-2">
                <FileText className="size-4 text-primary-600" />
                1. Coleta de Dados Pessoais
              </h4>
              <p>
                Ao preencher nossos formulários de contato ou solicitar orçamentos, coletamos apenas as informações estritamente necessárias para o atendimento técnico:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-neutral-600">
                <li>Nome completo;</li>
                <li>Endereço de e-mail corporativo ou pessoal;</li>
                <li>Telefone / WhatsApp de contato;</li>
                <li>Descrição das necessidades do projeto de engenharia ou automação.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-neutral-900 text-base mb-2 flex items-center gap-2">
                <Check className="size-4 text-primary-600" />
                2. Finalidade do Tratamento de Dados
              </h4>
              <p>
                Seus dados serão utilizados exclusivamente para:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-neutral-600">
                <li>Responder a dúvidas técnicas e propostas comerciais;</li>
                <li>Elaborar orçamentos e estudos de viabilidade técnica;</li>
                <li>Manter contato durante a execução de projetos contratados.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-neutral-900 text-base mb-2">3. Compartilhamento e Armazenamento</h4>
              <p>
                A OZM Engenharia <strong>não vende, aluga ou compartilha</strong> seus dados pessoais com terceiros para fins de marketing. Seus dados são armazenados em ambiente seguro com controle restrito de acesso.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-neutral-900 text-base mb-2">4. Direitos do Titular de Dados</h4>
              <p>
                Conforme a Lei Geral de Proteção de Dados (LGPD), você possui o direito de solicitar a qualquer momento a confirmação, acesso, correção ou eliminação dos seus dados pessoais cadastrados em nosso sistema.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-neutral-900 text-base mb-2">5. Contato do Encarregado de Dados (DPO)</h4>
              <p>
                Para exercer seus direitos de privacidade ou esclarecer dúvidas sobre esta política, entre em contato através do e-mail oficial:
              </p>
              <a
                href="mailto:eng.viniciusozelim@hotmail.com"
                className="inline-block mt-2 text-primary-600 font-bold hover:underline"
              >
                eng.viniciusozelim@hotmail.com
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 bg-neutral-50 border-t border-neutral-100 flex justify-end">
            <button
              onClick={onClose}
              className="bg-neutral-900 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-neutral-800 transition-all shadow-md active:scale-95 text-sm"
            >
              Compreendi e Concordo
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
