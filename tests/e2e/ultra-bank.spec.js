import { expect, test } from '@playwright/test';

test('homepage reflects requested Ultra Bank content changes', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('Telefonia móvel')).toBeVisible();
  await expect(page.getByText('Planos móveis para manter você conectado dentro e fora de casa.')).toBeVisible();

  await expect(page.getByLabel('Print do aplicativo Ultra Bank')).toBeVisible();
  await expect(page.getByText('Olá, Ana Paula')).toBeVisible();
  await expect(page.getByText('Recarga')).toBeVisible();
  await expect(page.getByText('Internet Banking')).toBeVisible();

  const planShadow = await page.locator('.plan-card').first().evaluate((card) => getComputedStyle(card).boxShadow);
  const featuredPlanShadow = await page
    .locator('.plan-card.featured')
    .evaluate((card) => getComputedStyle(card).boxShadow);
  expect(planShadow).toContain('92, 178, 255');
  expect(featuredPlanShadow).toContain('92, 178, 255');

  await expect(page.getByRole('heading', { name: 'Escolha o serviço e o Ultra Bank continua o atendimento.' })).toBeVisible();

  const footer = page.locator('footer');
  await expect(footer.getByText('Um banco digital com Infinitas Possibilidades em um só clique.')).toBeVisible();
  await expect(footer.getByText('R. Sergipe, 216 - Jardim Vitória - Itabuna - BA - CEP 45605-460')).toBeVisible();
  await expect(footer.getByText('Uma empresa do grupo:')).toHaveCount(0);
});

test('contact page has clickable WhatsApp and email links', async ({ page }) => {
  await page.goto('/fale-com-a-gente');

  await expect(page.getByRole('heading', { name: 'Fale com a gente' })).toBeVisible();
  await expect(page.getByRole('link', { name: /WhatsApp \(73\) 93300-5654/ })).toHaveAttribute(
    'href',
    'https://wa.me/5573933005654',
  );
  await expect(page.getByRole('link', { name: /E-mail suporte@ultrabankinvestiments\.com\.br/ })).toHaveAttribute(
    'href',
    'mailto:suporte@ultrabankinvestiments.com.br',
  );
});
