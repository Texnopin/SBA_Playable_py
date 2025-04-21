using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GlobalSortLayer : MonoBehaviour
{
    // Диапазон значений Y
    [SerializeField] private float minY = 0f;
    [SerializeField] private float maxY = 10f;

    // Диапазон значений Order In Layer
    [SerializeField] private int minLayerOrder = 0;
    [SerializeField] private int maxLayerOrder = 10;

    private SpriteRenderer spriteRenderer;

    private void Awake()
    {
        // Получаем компонент SpriteRenderer
        spriteRenderer = GetComponent<SpriteRenderer>();
    }

    private void Update()
    {
        // Рассчитываем Order In Layer на основе текущей позиции Y
        float normalizedY = Mathf.InverseLerp(minY, maxY, transform.position.y);
        int sortingOrder = Mathf.RoundToInt(Mathf.Lerp(minLayerOrder, maxLayerOrder, normalizedY));

        // Применяем рассчитанный Order In Layer
        spriteRenderer.sortingOrder = sortingOrder;
    }
}
