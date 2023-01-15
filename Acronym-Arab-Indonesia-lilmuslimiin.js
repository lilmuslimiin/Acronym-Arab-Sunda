document.addEventListener('DOMContentLoaded', () => {
      const abbreviations = [
        { abbreviation: 'اَلْحَمْدُ', meaning: 'segala puji' },
        { abbreviation: 'اَلتَّاسِعُ', meaning: 'Ari anu ka salapanna' },
        { abbreviation: 'اَلسُّجُوْدُ', meaning: '(eta) sujud' },
        { abbreviation: 'مَرَّتَيْنِ', meaning: 'Dua kali' },
        { abbreviation: 'أَيْ', meaning: 'Tegesna' },
        { abbreviation: 'فِي كُلِّ رَكْعَةٍ', meaning: 'Dina satiap rokaat' },
        { abbreviation: 'وَيُسَنُّ', meaning: 'Sareng disunnahkeun' },
        { abbreviation: 'أَنْ يَقُوْلَ', meaning: 'Yen ngucap' },
        { abbreviation: 'فَقَدْ وَرَدَ', meaning: 'Temen tos datang' },
        { abbreviation: 'عَنْ عُتْبَةَ بْنِ عَامِرٍ', meaning: 'Ti sayyidina utbah putra pemegetna aamir' },
        { abbreviation: 'اِجْعَلُوْ', meaning: 'Jadikeun ku aranjeun kabeh' },
        { abbreviation: 'فِي رُكُوْعِكُمْ', meaning: 'Dina ruku aranjeun kabeh' },
        { abbreviation: 'فِي سُجُوْدِكُمْ', meaning: 'Dina sujud aranjeun kabeh' },
        { abbreviation: 'رَاضِيْنَ', meaning: 'Anu pada rarido' },
        { abbreviation: 'اَللَّهُمَّ', meaning: 'Ya Allah' },
        { abbreviation: 'سَجَدْتُ', meaning: 'Abi sujud' },
        { abbreviation: 'آمَنْتُ', meaning: 'Abi iman' },
        { abbreviation: 'أَسْلَمْتُ', meaning: 'Abi pasrah' },
        { abbreviation: 'سَجَدَ', meaning: 'sujud' },
        { abbreviation: 'فِي الرَّوْضَةِ', meaning: 'Dina kitab raudhah' },
        { abbreviation: 'فِي السُّجُوْدِ', meaning: 'Dina sujud' },
		{ abbreviation: 'قَالَ الْمُصَنِّفُ', meaning: 'Musonif parantos ngadauh' },
		{ abbreviation: 'رَحِمَهُ اللهُ', meaning: 'Mugia Allah maparin rahmat ka anjeuna' },
		{ abbreviation: 'مِنْ أَسْمَاءِ الذَّاتِ', meaning: 'Tina pirang pirang asma dzat' },
		{ abbreviation: 'الْأعْلَى', meaning: 'Anu maha luhur' },
		{ abbreviation: 'الْمَوْصُوْفِ بِكَمَالِ', meaning: 'Anu ngagaduhan sifat kasampurnaan' },
		{ abbreviation: ' فِي اللَّوْحِ الْمَحْفُوْظِ', meaning: 'Di lauhil mahfud' },
		{ abbreviation: 'اِبْتَدَأَ الْمُصَنِّفُ كِتَابَهُ', meaning: 'Musonif ngawitan kitabna' },
		{ abbreviation: 'عَلَى مَنْ', meaning: 'Ka jalma' },
		{ abbreviation: 'تَابَ', meaning: 'Anu bertaubat' },
		{ abbreviation: 'فِي سَاقِ الْعَرْشِ', meaning: 'Dina tihang arasy' },
		{ abbreviation: 'فَاكْتُبُوْ', meaning: 'Maka tulis ku aranjeun' },
		{ abbreviation: 'نَزَلَ عَلَيَّ جِبْرِيْلُ بِهَا', meaning: 'Nalika malaikat jibril nurunkeun bismillah ka kaula' },
		{ abbreviation: 'وَلِأُمَّتِكَ', meaning: 'Pikeun umat anjeun' },
		{ abbreviation: 'فَإِنِّيْ', meaning: 'Maka saenyana abi' },
		{ abbreviation: 'عَلَى أَبِيْكَ', meaning: 'Ka bapa anjeun' },
		{ abbreviation: 'وَفِي رِوَايَةٍ', meaning: 'Sareng dina hiji riwayat' },
		{ abbreviation: 'كِتَابًا', meaning: 'Kana hiji kitab' },
		{ abbreviation: ' فِي أَوَّلِهِ', meaning: 'Di awalna' },
		{ abbreviation: 'وَرُوِيَ', meaning: 'Sareng diriwayatkeun' },
		{ abbreviation: 'عَنْهُ ﷺ', meaning: 'Ti kanjeung nabi muhammad' },
		{ abbreviation: 'مَنْ قُطِعَتْ يَدَاهُ', meaning: 'Jalma anu dipotong pananganna' },
		{ abbreviation: 'إِحْدَاهُمَا', meaning: 'Salah sahijina' },
		{ abbreviation: 'لَا تُطْلَبُ', meaning: 'Teu dianjurkeun' },
		{ abbreviation: 'لِلذِّكْرِ الْمَحْضِ', meaning: 'Pikeun Dzikir Anu murni' },
		{ abbreviation: 'كَالتَّهْلِيْلِ', meaning: 'Saperti tahlil' },
		{ abbreviation: ' وَعَمَلًا بِحَدِيْثِ', meaning: 'Sareng Ngamalkeun Kana Hadits' },
		{ abbreviation: 'كُلُّ أَمْرٍ', meaning: 'Ari Satiap Perkara' },
		{ abbreviation: 'لَا يُبْدَأُ', meaning: 'Teu dimimitian' },
		{ abbreviation: 'أَبْتَرُ أَوْ أَقْطَعُ أَوْ أَجْذَمُ', meaning: 'Buntung (Kurang barokah)' },
		{ abbreviation: 'أَقْطَعُ', meaning: 'Buntung' },
		{ abbreviation: 'أَجْذَمُ', meaning: 'Buntung' },
		{ abbreviation: 'اَلشَّرْفُ', meaning: 'Mulya' },
		{ abbreviation: 'الْعَظَمَةُ', meaning: 'Agung' },
		{ abbreviation: 'إِحْدَى وَعِشْرِيْنَ', meaning: 'Dua puluh hiji' },
		{ abbreviation: 'بِسْمِ اللهِ', meaning: 'Kalawan asmana Allah' },
		{ abbreviation: ' بِكُلِّ اسْمٍ', meaning: 'Ku satiap nami' },
		{ abbreviation: 'الرَّحْمنِ', meaning: 'Anu maha mikaasih di dunia sareng diakherat' },
		{ abbreviation: 'الرَّحِيْمِ', meaning: 'Anu maha mikaasih di akherat hungkul' },
		{ abbreviation: 'سُبْحَانَ', meaning: 'Maha suci' },
		{ abbreviation: 'رَبِّيَ الْأَعْلَى', meaning: 'Rabb abi anu maha luhur' },
		{ abbreviation: 'وَبِحَمْدِهِ', meaning: 'Sareng kalawan pujian ka anjeuna' },
		{ abbreviation: 'لَمَّا نَزَلَتْ', meaning: 'Nalika tos turun' },
		{ abbreviation: 'قَالَ ﷺ', meaning: 'Kanjeng nabi muhammad ngadauh' },
		{ abbreviation: 'وَيَحْصُلُ', meaning: 'Sareng hasil' },
		{ abbreviation: 'أَصْلُ السُّنَّةِ', meaning: 'Asal sunnah' },
		{ abbreviation: 'بِمَرَّةٍ', meaning: 'Ku sakali' },
		{ abbreviation: 'وَأَدْنَى الْكَمَالِ', meaning: 'Sareng ari pang handapna kasampurnaan' },
		{ abbreviation: 'ثَلَاثٌ', meaning: 'tilu' },
		{ abbreviation: 'خَمْسٌ', meaning: 'lima' },
		{ abbreviation: 'سَبْعٌ', meaning: 'tujuh' },
		{ abbreviation: 'تِسْعٌ', meaning: 'salapan' },
		{ abbreviation: 'إِحْدَى عَشْرَةَ', meaning: 'sabelas' },
		{ abbreviation: 'وَلَا يَزِيْدُ', meaning: 'sareng ulah nambahan' },
		{ abbreviation: 'أَحَدٌ', meaning: 'hiji jalma' },
		{ abbreviation: 'سِوَى', meaning: 'salianti' },
		{ abbreviation: 'وَإِمَامُ قَوْمٍ', meaning: 'Sareng imamna hiji kaum' },
		{ abbreviation: 'الْمُنْفَرِدُ ', meaning: 'jalma anu nyorangan' },
		{ abbreviation: 'إِكْثَارُ الدُّعَاءِ', meaning: 'nyeerkeun doa' },
		{ abbreviation: 'لِحَدِيْثِ مُسْلِمٍ', meaning: 'karna hadits imam muslim' },
		{ abbreviation: 'سَاجِدٌ', meaning: 'jalma anu sujud' },
		{ abbreviation: 'فَأَكْثِرُوْا الدُّعَاءَ', meaning: 'maka aranjeun kabeh kedah nyeerkeun doa' },
		{ abbreviation: 'الْبَغَوِيُّ', meaning: 'Imam Baghowi' },
		{ abbreviation: 'فِي سُجُوْدِهِ', meaning: 'Dina sujudna' },
		{ abbreviation: 'فَقَدْتُ', meaning: 'abi kalengitan' },
		{ abbreviation: 'مِنَ الْفِرَاشِ', meaning: 'titempat sare' },
		{ abbreviation: 'إِنِّيْ', meaning: 'saenyana ari abi' },
		{ abbreviation: 'بِرِضَاكَ', meaning: 'kana ridho anjeun' },
		{ abbreviation: 'وَبِمُعَافَاتِكَ', meaning: 'sareng kana ampunan anjeun' },
		{ abbreviation: 'مِنْ عُقُوْبَتِكَ', meaning: 'tina adab anjeun' },
		{ abbreviation: 'بِكَ', meaning: 'ka anjeun' },
		{ abbreviation: 'مِنْكَ', meaning: 'ti anjeun' },
		{ abbreviation: 'فَتْحُ عَيْنَيْهِ', meaning: 'muka dua socana' },
		{ abbreviation: 'حَالَةَ السُّجُوْدِ', meaning: 'dina tingkah sujud' },
		{ abbreviation: 'اَلْعَاشِرُ', meaning: 'ari anu ka sapuluhna' },
		{ abbreviation: 'اَلطُّمَأْنِيْنَةُ', meaning: 'anteng' },
		{ abbreviation: 'اَلسُّجُوْدِ', meaning: 'sujud' },
		{ abbreviation: 'إِحْدَى شُرُوْطِ', meaning: 'hiji tina pirang pirang syarat' },
		{ abbreviation: 'سَتَأْتِيْ', meaning: 'Bakal datang' },
		{ abbreviation: 'فِي كَلَامِ الْمُصَنِّفِ', meaning: 'Dina kalamna musonif' },
		{ abbreviation: 'رَضِيَ اللهُ عَنْهُ', meaning: 'mugia Allah mikaridho ka anjeuna' },
		{ abbreviation: 'تَبَارَكَ', meaning: 'mugia ngaberkahan' },
		{ abbreviation: 'أَحْسَنُ الْخَالِقِيْنَ', meaning: 'Pang sae saena pencipta' },
		{ abbreviation: 'وَجْهِيَ', meaning: 'rarai abi' },
		{ abbreviation: 'مِنْ رَبِّهِ', meaning: 'Ti Rabbna' },
		{ abbreviation: 'رَحْمَتِهِ', meaning: 'rahmatna' },
		{ abbreviation: 'وَعَفْوِهِ', meaning: 'sareng ampunan nana' },
		{ abbreviation: 'وَزَادَ', meaning: 'Sareng tos nambahan' },
		{ abbreviation: 'ثُمَّ', meaning: 'terus' },
		{ abbreviation: 'أَنْ يُسْتَجَابَ', meaning: 'Yen diijabah' },
		{ abbreviation: 'فِي المَصَابِيْحِ', meaning: 'Dina kitab Al-masobih' },
		{ abbreviation: 'عَنِ الشَّيْخَيْنِ', meaning: 'Ti imam Bukhori sareng imam Muslim' },
		{ abbreviation: 'اغْفِرْ', meaning: 'Mugia ngahapunteun' },
		{ abbreviation: 'فَوَقَعَتْ', meaning: 'Maka nyimpeun' },
		{ abbreviation: 'يَدِيْ', meaning: 'Panangan abi' },
		{ abbreviation: 'عَلَى بَطْنِ قَدَمَيْهِ', meaning: 'Kana hiji dampal tina dua sampeanna' },
		{ abbreviation: 'مِنْ سَخَطِكَ', meaning: 'Tina murka anjeun' },
		{ abbreviation: 'لَا أُحْصِيْ ثَنَاءً', meaning: 'Abi teu sanggup milang pujian' },
		{ abbreviation: 'عَلَيْكَ', meaning: 'Ka anjeun' },
		{ abbreviation: 'كَمَا', meaning: 'Sakumaha' },
		{ abbreviation: 'أَثْنَيْتَ', meaning: 'Anjeun muji' },
		{ abbreviation: 'عَلَى نَفْسِكَ', meaning: 'Ka diri anjeun' },
		{ abbreviation: 'أَعُوْذُ', meaning: 'Abi Nyalindung' },
		{ abbreviation: 'مَحْصُوْرِيْنَ', meaning: 'Anu terbatas' },
		{ abbreviation: 'فََقَمِنٌ', meaning: 'Maka layak' },
		{ abbreviation: 'فَحَقِيْقٌ', meaning: 'Maka layak' },
		{ abbreviation: 'وَقَالَتْ عَائِشَةُ', meaning: 'Sareng sayyidati aisyah parantos nyarios' },
		{ abbreviation: 'وَقَالَ أَبُوْ هُرَيْرَةَ', meaning: 'Sareng sayyidina abu huroiroh parantos nyarios' },
		{ abbreviation: 'كَانَ رَسُوْلُ اللهِ ﷺ', meaning: 'Buktos Rasulullah' },
		{ abbreviation: 'قَالَ الْبَغَوِيُّ', meaning: 'Al-Baghowi parantos nyarios' },
      ];
      const main = document.querySelector('main');
      let mainHtml = main.innerHTML;
    
      abbreviations.forEach(abbreviation => {
        mainHtml = mainHtml.replace(
          new RegExp(abbreviation.abbreviation, 'g'),
          `<abbr title="${abbreviation.meaning}">${abbreviation.abbreviation}</abbr>`
        );
      });
    
      main.innerHTML = mainHtml;
    });