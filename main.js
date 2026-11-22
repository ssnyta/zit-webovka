function spustitOdpocet() {
        const aktualniDatum = new Date();
        let rok = aktualniDatum.getFullYear();
        let vanoce = new Date(rok, 11, 24, 0, 0, 0);

        if (aktualniDatum.getMonth() === 11 && aktualniDatum.getDate() > 24) {
            vanoce.setFullYear(rok + 1);
        }

        const interval = setInterval(() => {
            const ted = new Date().getTime();
            const rozdil = vanoce.getTime() - ted;

            if (rozdil <= 0) {
                clearInterval(interval);
                document.getElementById("casovac").innerHTML = "Veselé Vánoce! 🎄";
                return;
            }

            const dny = Math.floor(rozdil / (1000 * 60 * 60 * 24));
            const hodiny = Math.floor((rozdil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minuty = Math.floor((rozdil % (1000 * 60 * 60)) / (1000 * 60));
            const sekundy = Math.floor((rozdil % (1000 * 60)) / 1000);

            document.getElementById("casovac").innerHTML = 
                `${dny} d : ${hodiny} h : ${minuty} m : ${sekundy} s`;
        }, 1000);
    }

    spustitOdpocet();