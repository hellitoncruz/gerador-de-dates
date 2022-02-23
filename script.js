

        var palpites = document.querySelector('.palpites');
        var resultado = document.querySelector('.resultado');
        var baixoOuAlto = document.querySelector('.baixoOuAlto');


        function conferirPalpite() {
            
            var numeroAleatorio = Math.floor(Math.random() *44) +1;

            if (numeroAleatorio === 1) {
                resultadDate.textContent = 'Pescar.';
                

            } else if (numeroAleatorio === 2) {
                resultado.textContent = "Jogar baralho (apostado)";
                
            } else if (numeroAleatorio === 3) {
                resultado.textContent = "Jogar Xadrez (apostado)";
                
            } else if (numeroAleatorio === 4) {
                resultado.textContent = "Jogar Dominó (apostado)";
                
            } else if (numeroAleatorio === 5) {
                resultado.textContent = "Filme de terror";
                
            } else if (numeroAleatorio === 6) {
                resultado.textContent = "Filme +18";
                
            } else if (numeroAleatorio === 7) {
                resultado.textContent = "Filme Clássico";
                
            } else if (numeroAleatorio === 8) {
                resultado.textContent = "Filme de Comédia";
                
            } else if (numeroAleatorio === 9) {
                resultado.textContent = "Fazer Brigadeiro";
                
            } else if (numeroAleatorio === 10) {
                resultado.textContent = "Ir comer em algum lugar que nunca fomos";
                
            } else if (numeroAleatorio === 11) {
                resultado.textContent = "Escrever um poema sobre o outro";
                
            } else if (numeroAleatorio === 12) {
                resultado.textContent = "Manicure e pedicure juntos";
                
            } else if (numeroAleatorio === 13) {
                resultado.textContent = "Maquiagem e Skincare";
                
            } else if (numeroAleatorio === 14) {
                resultado.textContent = "Fazer alguma receita do zero";
                
            } else if (numeroAleatorio === 15) {
                resultado.textContent = "Fazer exercicio juntos";
                
            } else if (numeroAleatorio === 16) {
                resultado.textContent = "Um passeio de bike";
                
            } else if (numeroAleatorio === 17) {
                resultado.textContent = "Ir em algum lugar tipo rio/lago";
                
            } else if (numeroAleatorio === 18) {
                resultado.textContent = "Tocar/cantar juntos";
                
            } 
            else if (numeroAleatorio === 19) {
                resultado.textContent = "Fazer um piquenique no campo";
                
            }else if (numeroAleatorio === 20) {
                resultado.textContent = "Fazer uma noite completa de cinema, pipoca, refri, sorvete, guloseimas";
                
            }else if (numeroAleatorio === 21) {
                resultado.textContent = "Assistir pôr do sol/ nascer do sol juntos";
                
            }else if (numeroAleatorio === 22) {
                resultado.textContent = "Passeio tipo trilha";
                
            }else if (numeroAleatorio === 23) {
                resultado.textContent = "Ler um para o outro";
                
            }else if (numeroAleatorio === 24) {
                resultado.textContent = "Fazer uma pixação";
                
            }else if (numeroAleatorio === 25) {
                resultado.textContent = "Tocar/cantar juntos";
                
            }else if (numeroAleatorio === 26) {
                resultado.textContent = "Comer pastel na feira com caldo de cana";
                
            }else if (numeroAleatorio === 27) {
                resultado.textContent = "Ir para outra cidade juntos";
                
            }else if (numeroAleatorio === 28) {
                resultado.textContent = "Alugar uma casa para passar o fim de semana juntos";
                
            }else if (numeroAleatorio === 29) {
                resultado.textContent = "Luar com fogueira e violão";
                
            }else if (numeroAleatorio === 30) {
                resultado.textContent = "Jogar Twistter";
                
            }else if (numeroAleatorio === 31) {
                resultado.textContent = "Assistir uma minisérie de uma vez";
                
            }else if (numeroAleatorio === 32) {
                resultado.textContent = "Criar uma cápsula do tempo";
                
            }else if (numeroAleatorio === 33) {
                resultado.textContent = "Jantar romântico, com velas, flores...";
                
            }else if (numeroAleatorio === 34) {
                resultado.textContent = "Ir à um cinema de verdade";
                
            }else if (numeroAleatorio === 35) {
                resultado.textContent = "Jogar Ludo";
                
            }else if (numeroAleatorio === 36) {
                resultado.textContent = "Jogar video game";
                
            }else if (numeroAleatorio === 37) {
                resultado.textContent = "Seção de fotos";
                
            }else if (numeroAleatorio === 38) {
                resultado.textContent = "Ir à igreja";
                
            }else if (numeroAleatorio === 39) {
                resultado.textContent = "Brigadeiro alcoolico";
                
            }else if (numeroAleatorio === 40) {
                resultado.textContent = "Experimentar algo que nenhum dos dois já comeu";
                
            }else if (numeroAleatorio === 41) {
                resultado.textContent = "Fazer uma seção de massagens";
                
            }else if (numeroAleatorio === 42) {
                resultado.textContent = "Tomar banho de espuma";
                
            }else if (numeroAleatorio === 43) {
                resultado.textContent = "Comprar roupas combinando";
                
            }
            else{
                resultado.textContent = "Briga de travesseiros";
                baixoOuAlto.textContent = '';
                
            }

            // contagemPalpites++;
            // campoPalpite.value= '';
            // campoPalpite.focus();
             }

            // function configFimDeJogo() {
            //     campoPalpite.disabled = true;
            //     envioPalpite.disabled = true;
            //     botaoReinicio = document.createElement('button');
            //     botaoReinicio.textContent = 'Iniciar novo jogo';
            //     document.body.appendChild(botaoReinicio);
            //     botaoReinicio.addEventListener('click', reiniciarJogo)
            // }

            // function reiniciarJogo() {
            //     contagemPalpites = 1;

            //     var reiniciarParas = document.querySelectorAll('.resultadoParas p');
            //     for (var i = 0 ; i < reiniciarParas.length ; i++) {
            //         reiniciarParas[i].textContent = '';
            //     }

            //     botaoReinicio.parentNode.removeChild(botaoReinicio);

            //     campoPalpite.disabled = false;
            //     envioPalpite.disabled = false;
            //     campoPalpite.value = '';
            //     campoPalpite.focus();

            //     ultimoResultado.style.backgroundColor = 'white';

            //     numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            // }