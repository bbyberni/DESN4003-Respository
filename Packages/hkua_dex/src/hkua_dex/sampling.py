

def latin_hypercube(d, n):
    from scipy.stats import qmc
    sampler = qmc.LatinHypercube(d=d, optimization="random-cd")
    sample = sampler.random(n=n)
    return sample