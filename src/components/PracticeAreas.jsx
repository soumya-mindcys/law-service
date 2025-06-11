// PracticeAreas.jsx
import React from 'react';
import { Briefcase, Pickaxe, Handshake, Gavel, Scale } from 'lucide-react';
import styled from 'styled-components';
import '../App.css';

const areas = [
	{
		icon: Briefcase,
		title: 'Commercial Law',
		description: 'Business contracts, corporate compliance, commercial disputes',
		button: 'Get Commercial Advice',
	},
	{
		icon: Pickaxe,
		title: 'Mining Law',
		description: 'Mining licenses, environmental clearances, regulatory compliance',
		button: 'Mining Legal Help',
	},
	{
		icon: Handshake,
		title: 'Trade Law',
		description: 'International trade, import-export regulations, trade disputes',
		button: 'Trade Law Consultation',
	},
	{
		icon: Gavel,
		title: 'Competition Law',
		description: 'Anti-trust matters, merger approvals, competition compliance',
		button: 'Competition Advice',
	},
	{
		icon: Scale,
		title: 'Dispute Resolution',
		description: 'Litigation, arbitration, mediation services',
		button: 'Resolve Disputes',
	},
];

const AreasGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 2.5rem;
	}
	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 3rem;
	}
`;
const PracticeCard = styled.div`
	background-color: #fff;
	padding: 24px;
	border-radius: 8px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease;
	min-width: 0;
	&:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		transform: translateY(-4px);
	}
`;
const IconCircle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 4rem;
	height: 4rem;
	background: #ffe5d0;
	border-radius: 50%;
	margin-bottom: 1rem;
	transition: background 0.3s;
	.group:hover & {
		background: #ff6b35;
	}
`;
const AreaTitle = styled.h3`
	font-size: 1.15rem;
	font-weight: 700;
	color: #1a1a1a;
	margin-bottom: 0.75rem;
	@media (min-width: 480px) {
		font-size: 1.25rem;
	}
`;
const AreaDesc = styled.p`
	color: #4b5563;
	margin-bottom: 1rem;
	font-size: 0.98rem;
	@media (min-width: 480px) {
		font-size: 1.05rem;
	}
`;
const AreaButton = styled.button`
	border: 2px solid #ff6b35;
	color: #ff6b35;
	padding: 8px 16px;
	border-radius: 8px;
	background: transparent;
	cursor: pointer;
	font-size: 0.98rem;
	width: 100%;
	transition: all 0.3s;
	font-weight: 600;
	&:hover {
		background: #ff6b35;
		color: #fff;
	}
	@media (min-width: 480px) {
		width: auto;
		font-size: 1rem;
	}
`;

const PracticeAreas = ({ scrollToSection }) => (
	<section id="practice-areas" className="py-16 bg-white">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 className="section-title">Our Practice Areas</h2>
			<AreasGrid>
				{areas.map((area, index) => (
					<PracticeCard key={index} className="practice-card group">
						<IconCircle>
							<area.icon className="h-8 w-8 text-orange-500 group-hover:text-white" />
						</IconCircle>
						<AreaTitle>{area.title}</AreaTitle>
						<AreaDesc>{area.description}</AreaDesc>
						<AreaButton onClick={() => scrollToSection('contact')}>
							{area.button}
						</AreaButton>
					</PracticeCard>
				))}
			</AreasGrid>
		</div>
	</section>
);

export default PracticeAreas;
