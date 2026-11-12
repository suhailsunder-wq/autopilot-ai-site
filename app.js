(() => {
  'use strict';
  const config = window.AUTOPILOT_SITE || {};
  const menuButton = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-nav-links]');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const opened = menu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(opened));
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }
  const statusLabels = document.querySelectorAll('[data-shop-status]');
  statusLabels.forEach(el => {
    el.textContent = config.shopOpen ? 'Now available' : 'Coming soon';
  });
  document.querySelectorAll('[data-buy-product]').forEach(el => {
    const product = el.dataset.buyProduct;
    const url = product === 'free' ? config.freeCalculatorUrl : config.rateFloorUrl;
    if (config.shopOpen && url && /^https:\/\//.test(url)) {
      el.removeAttribute('aria-disabled');
      el.removeAttribute('tabindex');
      el.classList.remove('button-disabled');
      const tracked = new URL(url);
      tracked.searchParams.set('utm_source', 'autopilotai');
      tracked.searchParams.set('utm_medium', 'website');
      tracked.searchParams.set('utm_campaign', 'rate_floor_organic');
      tracked.searchParams.set('utm_content', product === 'free' ? 'free_calculator' : 'paid_toolkit');
      el.setAttribute('href', tracked.toString());
      el.textContent = product === 'free' ? 'Download free calculator ↗' : 'Get The Rate Floor — $19 ↗';
    } else {
      el.removeAttribute('href');
      el.setAttribute('role', 'link');
      el.setAttribute('aria-disabled', 'true');
      el.setAttribute('tabindex', '-1');
      el.classList.add('button-disabled');
      el.textContent = product === 'free' ? 'Free download coming soon' : '$19 kit coming soon';
    }
  });
  document.querySelectorAll('[data-contact-email]').forEach(el => {
    if (!config.contactEmail) return;
    const subject = el.dataset.emailSubject || 'AUTOPILOT AI enquiry';
    const body = el.dataset.emailBody || '';
    el.href = `mailto:${config.contactEmail}?subject=${encodeURIComponent(subject)}${body ? '&body=' + encodeURIComponent(body) : ''}`;
  });
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = String(new Date().getFullYear()));
  const form = document.querySelector('[data-quick-estimator]');
  if (form) {
    const inputs = [...form.querySelectorAll('input,select')];
    const fmt = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    const number = (n) => Number.isFinite(n) && n >= 0 ? n : null;
    function update() {
      const values = Object.fromEntries(inputs.map(el => [el.name, el.value]));
      const goal = number(Number(values.takeHome));
      const costs = number(Number(values.costs));
      const tax = number(Number(values.taxRate));
      const hours = number(Number(values.hours));
      const weeks = number(Number(values.weeks));
      const symbol = { USD: '$', EUR: '€', GBP: '£', MUR: 'Rs ' }[values.currency] || '$';
      const ok = goal !== null && costs !== null && tax !== null && tax < 100 && hours > 0 && weeks > 0 && hours <= 168 && weeks <= 52;
      const result = document.querySelector('[data-estimated-rate]');
      const hoursOut = document.querySelector('[data-billable-hours]');
      const annualOut = document.querySelector('[data-annual-revenue]');
      if (!result || !hoursOut || !annualOut) return;
      if (!ok) {
        result.textContent = '—'; hoursOut.textContent = '—'; annualOut.textContent = '—';
        return;
      }
      const annual = goal / (1 - tax / 100) + costs;
      const billable = hours * weeks;
      result.textContent = `${symbol}${fmt.format(annual / billable)}`;
      hoursOut.textContent = billable.toLocaleString('en-US') + ' hrs';
      annualOut.textContent = `${symbol}${Math.round(annual).toLocaleString('en-US')}`;
    }
    inputs.forEach(el => el.addEventListener('input', update));
    inputs.forEach(el => el.addEventListener('change', update));
    update();
  }
})();