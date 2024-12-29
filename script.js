const banks = [
    { samaCode: '55', bankName: 'Banque Saudi Fransi', nameEn: 'Banque Saudi Fransi', nameAr: 'البنك السعودي الفرنسي' },
    { samaCode: '80', bankName: 'Alrajhi Bank', nameEn: 'Alrajhi Bank', nameAr: 'بنك الراجحي' },
    { samaCode: '10', bankName: 'National Commercial Bank', nameEn: 'National Commercial Bank', nameAr: 'البنك الأهلي التجاري' },
    { samaCode: '45', bankName: 'Saudi British Bank', nameEn: 'SABB', nameAr: 'ساب' },
    { samaCode: '20', bankName: 'Riyadh Bank', nameEn: 'Riyad Bank', nameAr: 'بنك الرياض' },
    { samaCode: '40', bankName: 'Saudi American Bank', nameEn: 'SAMBA', nameAr: 'سامبا' },
    { samaCode: '05', bankName: 'Alinma Bank', nameEn: 'Al Inma Bank', nameAr: 'بنك الإنماء' },
    { samaCode: '50', bankName: 'Alawwal Bank', nameEn: 'AlAwwal Bank', nameAr: 'البنك الأول' },
    { samaCode: '60', bankName: 'Bank AlJazira', nameEn: 'Bank Aljazira', nameAr: 'بنك الجزيرة' },
    { samaCode: '65', bankName: 'Saudi Investment Bank', nameEn: 'Saudi Investment Bank', nameAr: 'البنك السعودي للاستثمار' },
    { samaCode: '15', bankName: 'Bank AlBilad', nameEn: 'Bank AlBilad', nameAr: 'بنك البلاد' },
    { samaCode: '30', bankName: 'Arab National Bank', nameEn: 'Arab National Bank', nameAr: 'البنك العربي الوطني' },
    { samaCode: '90', bankName: 'Gulf Bank', nameEn: 'Gulf International Bank', nameAr: 'بنك الخليج' },
    { samaCode: '95', bankName: 'Emirates Bank', nameEn: 'Emirates Bank', nameAr: 'بنك الإمارات' },
    { samaCode: '76', bankName: 'Bank Muscat', nameEn: 'Bank Muscat', nameAr: 'بنك مسقط' },
    { samaCode: '71', bankName: 'National Bank of Bahrain', nameEn: 'National Bank of Bahrain', nameAr: 'بنك البحرين الوطني' },
    { samaCode: '75', bankName: 'National Bank of Kuwait', nameEn: 'National Bank of Kuwait', nameAr: 'بنك الكويت الوطني' },
    { samaCode: '85', bankName: 'BNP Paribas Bank', nameEn: 'BNP Paribas Saudi Arabia', nameAr: 'بي إن بي باريبوس' },
  ];
  
  function checkiban(iban) {
    if (!iban) return false;
  
    iban = iban.replaceAll(' ', '');
  
    if (iban.length !== 24) return false;
    if (!iban.startsWith('SA')) return false;
  
    return true;
  }
  
  function GetIban() {
    const iban = document.getElementById('iban').value;
    const result = document.getElementById('result');
    const bn = document.getElementById('bank');
    const bankresult = document.getElementById('bank1');
    const bankresult2 = document.getElementById('bank2');
    const cm = document.getElementById('samaid');
    const camacodresult = document.getElementById('samaalert');
  
    if (!checkiban(iban)) {
      result.innerHTML = 'الآيبان غير صحيح';
      result.classList.add('text-danger');
      result.classList.remove('text-success');
      bn.innerHTML = '';
      bankresult.innerHTML = '';
      bankresult2.innerHTML = '';
      cm.innerHTML = '';
      camacodresult.innerHTML = '';
      return;
    }
  
    result.innerHTML = 'الآيبان صحيح';
    result.classList.add('text-success');
    result.classList.remove('text-danger');
  
    const cleanedIban = iban.replaceAll(' ', '');
    const samacode = cleanedIban.substring(4, 6);
    const Bankname = banks.find((e) => e.samaCode === samacode);
  
    if (Bankname) {
      bn.innerHTML = 'اسم البنك:';
      bankresult.innerHTML = Bankname.bankName || 'غير متوفر';
      bankresult2.innerHTML = Bankname.nameAr || 'غير متوفر';
      cm.innerHTML = 'سما كود:';
      camacodresult.innerHTML = Bankname.samaCode || 'غير متوفر';
    } else {
      bn.innerHTML = 'اسم البنك:';
      bankresult.innerHTML = 'كود البنك غير موجود';
      bankresult2.innerHTML = '';
      cm.innerHTML = 'سما كود:';
      camacodresult.innerHTML = 'غير موجود';
    }
  }
  