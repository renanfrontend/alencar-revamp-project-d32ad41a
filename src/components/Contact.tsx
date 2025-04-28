
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Mensagem enviada",
      description: "Entraremos em contato em breve!",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-gradient inline-block">Entre em Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para oferecer o melhor atendimento para você e sua família. Entre em contato para mais informações ou para agendar uma visita.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-alencar-blue-dark">Envie-nos uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input 
                  id="name" 
                  name="name"
                  placeholder="Digite seu nome" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    placeholder="seu@email.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    placeholder="(11) 98765-4321" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Como podemos ajudar?" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-alencar-blue hover:bg-alencar-blue-dark">
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-alencar-blue-dark">Informações de Contato</h3>
            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-start p-6">
                  <div className="bg-alencar-blue/10 p-4 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-alencar-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Telefone</h4>
                    <p className="text-gray-600">(11) 94233-2485</p>
                    <a href="tel:+551194233-2485" className="text-alencar-blue hover:underline mt-1 inline-block">
                      Ligar agora
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-start p-6">
                  <div className="bg-alencar-blue/10 p-4 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-alencar-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">E-mail</h4>
                    <p className="text-gray-600">contato@grupoalencartratamentos.com.br</p>
                    <a href="mailto:contato@grupoalencartratamentos.com.br" className="text-alencar-blue hover:underline mt-1 inline-block">
                      Enviar e-mail
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-start p-6">
                  <div className="bg-alencar-blue/10 p-4 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-alencar-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Endereço</h4>
                    <p className="text-gray-600">São Paulo - SP</p>
                    <p className="text-gray-600">Atendemos em toda a região metropolitana</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-alencar-pink-light p-6 rounded-lg border border-alencar-pink">
                <h4 className="font-bold text-lg mb-3 text-alencar-blue-dark">Horário de Atendimento</h4>
                <p className="text-gray-700 mb-2"><span className="font-bold">Segunda a Sexta:</span> 08:00 - 18:00</p>
                <p className="text-gray-700 mb-2"><span className="font-bold">Sábado:</span> 08:00 - 12:00</p>
                <p className="text-gray-700 font-medium">Atendimentos de emergência disponíveis 24h.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
