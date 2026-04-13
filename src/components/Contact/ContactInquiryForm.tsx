"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

const ContactInquiryForm = () => {
	const t = useTranslations('contactInquiry');
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		company: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('idle');
		try {
			const subject = encodeURIComponent(`Partnership Inquiry from ${formData.fullName}`);
			const body = encodeURIComponent(`Name: ${formData.fullName}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not specified'}\n\nMessage:\n${formData.message}`);
			window.location.href = `mailto:ptnusantaraaromacraft@gmail.com?subject=${subject}&body=${body}`;
			setFormData({ fullName: '', email: '', company: '', message: '' });
			setSubmitStatus('success');
		} catch (error) {
			console.error('Form submission error:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div>
			<h3 className="text-2xl font-medium mb-6">{t('submit')}</h3>

			{submitStatus === 'success' && (
				<div className="alert alert-success mb-4">
					<span>{t('successMessage')}</span>
				</div>
			)}

			{submitStatus === 'error' && (
				<div className="alert alert-error mb-4">
					<span>{t('errorMessage')}</span>
				</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-4">
				<fieldset className="fieldset">
					<legend className="fieldset-legend">{t('name')}</legend>
					<input name="fullName" value={formData.fullName} onChange={handleInputChange} className="input w-full focus:outline-0" placeholder={t('namePlaceholder')} type="text" required />
				</fieldset>

				<fieldset className="fieldset">
					<legend className="fieldset-legend">{t('email')}</legend>
					<input name="email" value={formData.email} onChange={handleInputChange} className="input w-full focus:outline-0" placeholder={t('emailPlaceholder')} type="email" required />
				</fieldset>

				<fieldset className="fieldset">
					<legend className="fieldset-legend">
						{t('company')} <span className="text-base-content/60">({t('optional')})</span>
					</legend>
					<input name="company" value={formData.company} onChange={handleInputChange} className="input w-full focus:outline-0" placeholder={t('companyPlaceholder')} type="text" />
				</fieldset>

				<fieldset className="fieldset">
					<legend className="fieldset-legend">{t('message')}</legend>
					<textarea name="message" value={formData.message} onChange={handleInputChange} className="textarea textarea-bordered w-full focus:outline-0 min-h-32 resize-none" placeholder={t('messagePlaceholder')} required />
				</fieldset>

				<div className="flex justify-end pt-4">
					<button type="submit" disabled={isSubmitting} className="btn btn-primary px-8">
						{isSubmitting ? (
							<><span className="loading loading-spinner loading-sm"></span> {t('sending')}</>
						) : t('submit')}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactInquiryForm;
